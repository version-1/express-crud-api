import Sequelize from 'sequelize'
import db from '../infrustructure/database'

class Blog extends Sequelize.Model {}
Blog.init({
  // attributes
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'blog'
  // options
});
