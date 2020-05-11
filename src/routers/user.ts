import express from 'express'
import User from '../models/user'
import { hash } from '../lib/bcrypt'
const router = express.Router()

/* POST users listing. */
router.post('/', async function (req, res, next) {
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
