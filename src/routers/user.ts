import express, { Request, Response, NextFunction } from 'express'
import User from '../models/user'
const router = express.Router()

/* POST users listing. */
router.get('/', async function (req: any, res: Response, next: NextFunction) {
  res.status(200).json({ user: req.user })
})

/* GET user posts listing. */
router.get('/posts', async function (req: any, res: Response, next: NextFunction) {
  const posts = await req.user.getPosts()
  res.status(200).json({ posts })
})

export default router
