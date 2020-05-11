import express from 'express'
import User from '../models/user'
import jwt from 'jsonwebtoken'
import passport from 'passport'
const router = express.Router()

/* POST login. */
router.post('/login', function (req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      console.error('hoge', err)
      return res.status(400).json({
        message: 'Something is not right',
        user: user,
      })
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err)
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const payload = { id: user.id, loginId: user.loginId }
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY)
      user.authorizeToken = '[Secret]'
      return res.json({ user, token })
    })
  })(req, res)
})

export default router
