import Sequelize from 'sequelize'
import db from './'

class Category extends Sequelize.Model {}
Category.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  key: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'category'
  // options
});

export default Category
