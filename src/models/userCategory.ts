import Sequelize from 'sequelize'
import db from './'

class UserCategory extends Sequelize.Model {}
UserCategory.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  categoryId: {
    type: Sequelize.INTEGER,
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
  modelName: 'userCategory'
  // options
});
