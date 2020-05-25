import passport from 'passport'
import passportLocal from 'passport-local'
import User from '../models/user'
import { compare } from '../lib/bcrypt'
import passportJWT from 'passport-jwt'
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt
const LocalStrategy = passportLocal.Strategy

passport.use(
  new LocalStrategy(
    {
      usernameField: 'loginId',
      passwordField: 'password',
    },
    async function (loginId: string, password: string, cb: Function) {
      return User.findOne({ where: { loginId } })
        .then((user: User) => {
          if (!user) {
            return cb(null, false, { message: 'Incorrect email or password.' })
          }

          const validate = compare(password, User.salt(user), user.authorizeToken!)
          return cb(null, user, { message: 'Logged In Successfully' })
        })
        .catch((err: Error) => cb(err))
    },
  ),
)

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY,
    },
    function (jwtPayload: any, cb: Function) {
      return User.findByPk(jwtPayload.id)
        .then((user: User) => {
          return cb(null, user)
        })
        .catch((err: Error) => {
          return cb(err)
        })
    },
  ),
)
