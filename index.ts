import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import passport from 'passport'
import './src/middlewares/passport'
import { connect } from './src/models'
import user from './src/routers/user'
import auth from './src/routers/auth'
import categories from './src/routers/categories'
import posts from './src/routers/posts'
const app = express()
const port = 8080 // default port to listen

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.json({ message: 'ok' })
})

app.use(express.json())
app.use(bodyParser.json({ type: 'application/*+json' }))

const routersWithAuth = [
  { path: '/posts', route: posts },
  { path: '/categories', route: categories },
  { path: '/user', route: user },
]

routersWithAuth.forEach(route => {
  app.use(route.path, passport.authenticate('jwt', {session: false}), route.route)
})
app.use('/auth', auth)

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
  connect()
})
