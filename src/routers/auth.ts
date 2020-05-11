import express from 'express'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import User from '../models/user'
import { hash } from '../lib/bcrypt'
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

router.post('/signup', async function (req, res, next) {
  const { user } = req.body
  const _user = await User.findOne({ where: { loginId: user.loginId } })
  if (!user.password || user.password.length < 6) {
    return res.status(400).json({ error: 'パスワードは6文字以上を設定してください', code: 'invalidPassword' })
  }
  if (_user) {
    return res.status(422).json({ error: 'すでに登録されているログインIDです', code: 'alreadyRegistered' })
  }
  const authorizeToken = await hash(user.password, User.salt(user))
  delete user['password']
  user.authorizeToken = authorizeToken

  User.create(user)

  res.status(201).json({})
})

export default router
