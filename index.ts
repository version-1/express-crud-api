import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { connect } from './src/models'
import user from './src/routers/user'
const app = express()
const port = 8080 // default port to listen

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.json({ message: 'ok' })
})

app.use(express.json())
app.use(bodyParser.json({ type: 'application/*+json' }))

app.use('/user', user)

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
  connect()
})
