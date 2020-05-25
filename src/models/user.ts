import Sequelize from 'sequelize'
import db from './'
import Post from './post'

class User extends Sequelize.Model {
  public loginId?: number
  public authorizeToken?: string

  public static salt(user: User): string {
    return [user.loginId].join('-')
  }
}
User.init(
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    loginId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    authorizeToken: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    iconUrl: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize: db,
    modelName: 'user',
    // options
  },
)

User.hasMany(Post)
Post.belongsTo(User)

export default User
