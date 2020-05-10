import Sequelize from 'sequelize'
import db from '../infrustructure/database'

class User extends Sequelize.Model {}
User.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  loginId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  authorizeToken: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  iconUrl: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
}, {
  sequelize: db,
  modelName: 'user'
  // options
});
