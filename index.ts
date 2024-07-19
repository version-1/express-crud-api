import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import passport from 'passport'
import './src/middlewares/passport'
import { connect } from './src/models'
import user from './src/routers/user'
import auth from './src/routers/auth'
import categories from './src/routers/categories'
import posts from './src/routers/posts'
const app = express()
const port = process.env.PORT || 8080 // default port to listen

// define a route handler for the default home page
app.get('/', (_req: Request, res: Response) => {
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

app.use(function(err: Error, _req: Request, res: Response, _next: NextFunction) {
  console.error(err.stack)
  res.status(500).send({ message: err.message })
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
  connect()
})
