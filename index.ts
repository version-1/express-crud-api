import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import passport from 'passport'
import './src/middlewares/passport'
import { connect } from './src/models'
import user from './src/routers/user'
import auth from './src/routers/auth'
import categories from './src/routers/categories'
const app = express()
const port = 8080 // default port to listen

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.json({ message: 'ok' })
})

app.use(express.json())
app.use(bodyParser.json({ type: 'application/*+json' }))

app.use('/user', passport.authenticate('jwt', {session: false}), user)
app.use('/auth', auth)
app.use('/categories', categories)

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
  connect()
})
