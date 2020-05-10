import { Sequelize } from 'sequelize'
import database from '../config/database'

const config = database.modules[process.env.NODE_ENV || 'development']

const connection = new Sequelize(config.database, config.username, config.password, {
  dialect: 'mysql',
})

export const connect = () =>
  connection
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.', `database: ${config.database}`)
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err)
    })

export default connection
