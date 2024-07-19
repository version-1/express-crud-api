import express, { Request, Response } from 'express'
import Category from '../models/category'
import { RequestWithContext } from '.'
const router = express.Router()

/* POST users listing. */
router.get('/', async function (req: Request, res: Response) {
  const r = req as RequestWithContext

  const { authorizeToken, ...user } = r.user.toJSON()
  res.status(200).json({ user })
})

/* GET user posts listing. */
router.get('/posts', async function (req: Request, res: Response) {
  const r = req as RequestWithContext

  const where = req.query as { [key: string]: any }
  const posts = await (r.user as any).getPosts({ where, include: [{ model: Category, as: 'categories' }] })
  res.status(200).json({ posts })
})

export default router
