import express, { Request, Response, NextFunction } from 'express'
import Post from '../models/post'
import Category from '../models/category'
import { RequestWithContext } from '.'
const router = express.Router()

/* GET posts listing. */
router.get('/', async function (req: Request, res: Response, next: NextFunction) {
  const where = req.query as { [key: string]: any }
  try {
    const posts = await Post.findAll({
      where,
      include: [{ model: Category, as: 'categories' }],
    })
    res.status(200).json({ posts })
  } catch (error) {
    return next(error)
  }
})

router.get('/:id', async function (req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  const post = await Post.findByPk(id, {
    include: [{ model: Category, as: 'categories' }],
  })
  if (!post) {
    return res.status(404).json({ message: 'Post not found' })
  }

  res.status(200).json({ post })
})

/* POST create post */
router.post('/', async function (req: Request, res: Response, next: NextFunction) {
  const r = req as RequestWithContext
  const {
    post: { categoryIds, ...rest },
  } = req.body

  try {
    const params = { ...rest, userId: r.user?.id }
    const error = await Post.add(params, categoryIds)
    if (error) {
      return res.status(400).json(error)
    }

    res.status(201).json({})
  } catch (error) {
    return next(error)
  }
})

/* PATCH update post */
router.patch('/:id', async function (req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  const {
    post: { categoryIds, ...rest },
  } = req.body
  const post = await Post.findByPk(id)
  if (!post) {
    return res.status(404).json({ message: 'Post not found' })
  }

  try {
    await post!.updateWithAssociation(rest, { categoryIds })
    res.status(200).json({ post })
  } catch (error) {
    return next(error)
  }
})

/* DELETE delete post */
router.delete('/:id', async function (req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  try {
    const post = await Post.findByPk(id)
    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }

    await post!.destroy()
    res.status(200).json({ post })
  } catch (error) {
    console.error(error)
    return next(error)
  }
})

export default router
