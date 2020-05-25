import express from 'express'
import User from '../models/user'
const router = express.Router()

/* POST users listing. */
router.get('/', async function (req, res, next) {
  res.status(200).json({ user: req.user })
})

/* GET user posts listing. */
router.get('/posts', async function (req, res, next) {
  const posts = await req.user.getPosts()
  res.status(200).json({ posts })
})

export default router
