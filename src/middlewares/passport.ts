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
    async function (loginId, password, cb) {
      return User.findOne({ where: { loginId } })
        .then((user) => {
          if (!user) {
            return cb(null, false, { message: 'Incorrect email or password.' })
          }

          const validate = compare(password, User.salt(user), user.authorizeToken)
          return cb(null, user, { message: 'Logged In Successfully' })
        })
        .catch((err) => cb(err))
    },
  ),
)

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY,
    },
    function (jwtPayload, cb) {
      console.log(jwtPayload)
      return User.findByPk(jwtPayload.id)
        .then((user) => {
          return cb(null, user)
        })
        .catch((err) => {
          return cb(err)
        })
    },
  ),
)
