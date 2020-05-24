import Sequelize from 'sequelize'
import db from './'

class PostCategory extends Sequelize.Model {}
PostCategory.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  postId: {
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
  modelName: 'postCategory'
  // options
});
