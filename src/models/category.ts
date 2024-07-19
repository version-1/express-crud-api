import Sequelize from 'sequelize'
import db from './'
import PostCategory from './postCategory'

class Category extends Sequelize.Model {
  public id?: number
  public key?: string
  public name?: string
}

Category.init(
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    key: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Category',
    // options
  },
)

Category.hasMany(PostCategory)
PostCategory.belongsTo(Category)

export default Category
