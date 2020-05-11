import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import './src/middlewares/passport'
import { connect } from './src/models'
import user from './src/routers/user'
import auth from './src/routers/auth'
const app = express()
const port = 8080 // default port to listen

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.json({ message: 'ok' })
})

app.use(express.json())
app.use(bodyParser.json({ type: 'application/*+json' }))

app.use('/user', user)
app.use('/auth', auth)

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
  connect()
})
