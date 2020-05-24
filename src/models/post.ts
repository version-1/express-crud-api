import Sequelize from 'sequelize'
import db from './'

class Post extends Sequelize.Model {}
Post.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
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
  modelName: 'post'
  // options
});

export default Post
