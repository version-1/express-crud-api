import Sequelize from 'sequelize'
import db from '../infrustructure/database'

class Category extends Sequelize.Model {}
Category.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false
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
