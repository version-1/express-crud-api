import Sequelize from 'sequelize'
import db from './'
import User from './user'
import PostCategory from './postCategory'
import Category from './category'

class Post extends Sequelize.Model {}
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
    modelName: 'post',
    // options
  },
)

export const PostCategories = Post.hasMany(PostCategory)
export const postCategory = PostCategory.belongsTo(Post)
export const Categories = Post.belongsToMany(Category, { as: 'categories', through: 'PostCategories' })
export const Posts = Category.belongsToMany(Post, { as: 'posts', through: 'PostCategories' })

export default Post
