import { Sequelize } from 'sequelize'
import database from '../config/database'

const config = (database as any)[process.env.NODE_ENV || 'development']

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
})

export const connect = () =>
  connection
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.', `database: ${config.database}`)
    })
    .catch((err: Error) => {
      console.error('Unable to connect to the database:', err)
    })
export default connection
