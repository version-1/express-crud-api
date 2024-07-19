import Sequelize from 'sequelize'
import db from './'
import PostCategory from './postCategory'
import Category from './category'

export const Status = {
  draft: 0,
  published: 100,
  unpublished: 200,
}

class Post extends Sequelize.Model {
  public id?: number
  public setCategories?: Function

  static async add(params: any, categoryIds: number[]) {
    const categories = await Category.findAll({ where: { id: categoryIds } })

    if (categories.length !== categoryIds.length) {
      const missingIds = categoryIds.filter((id) => !categories.find((category) => category.id === id))
      return `category is missing: [${missingIds.join(',')}]`
    }

    await db.transaction(async (t) => {
      const post = await Post.create(params, { transaction: t })
      if (post) {
        await (post as any).setCategories(categories, {
          through: {
            postId: post.id,
          },
          transaction: t,
        })
      }
    })
  }

  public async updateWithAssociation(params: any, associations: { categoryIds: number[] }) {
    await db.transaction(async (t) => {
      this.update(params)
      const categories = await Category.findAll({ where: { id: associations.categoryIds } })
      this.setCategories!(categories, { through: { postId: this.id }, transaction: t })
    })
  }
}
Post.init(
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Post',
    tableName: 'posts'
  },
)

Post.hasMany(PostCategory)
PostCategory.belongsTo(Post)
Post.belongsToMany(Category, { as: 'categories', through: 'postCategories' })
Category.belongsToMany(Post, { as: 'posts', through: 'postCategories' })

export default Post
