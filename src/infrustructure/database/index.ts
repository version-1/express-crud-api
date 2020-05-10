import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const config = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
}

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
