import express, { Request, Response, NextFunction } from 'express'
import User from '../models/user'
import Category from '../models/category'
const router = express.Router()

/* POST users listing. */
router.get('/', async function (req: any, res: Response, next: NextFunction) {
  const { authorizeToken, ...user } = req.user.toJSON()
  res.status(200).json({ user })
})

/* GET user posts listing. */
router.get('/posts', async function (req: any, res: Response, next: NextFunction) {
  const where = req.query as { [key: string]: any }
  const posts = await req.user.getPosts({ where, include: [{ model: Category, as: 'categories' }] })
  res.status(200).json({ posts })
})

export default router
