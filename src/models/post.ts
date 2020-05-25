import Sequelize from 'sequelize'
import db from './'
import User from './user'
import PostCategory from './postCategory'

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

Post.hasMany(PostCategory)
PostCategory.hasMany(PostCategory)
Post.belongsToMany(Post, { as: 'categoires', through: 'PostCategory' })

export default Post
