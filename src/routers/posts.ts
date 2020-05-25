import express, { Request, Response, NextFunction } from 'express'
import Post, { Categories } from '../models/post'
import PostCategory from '../models/postCategory'
import Category from '../models/category'
import conn from '../models'
const router = express.Router()

/* GET categories listing. */
router.get('/', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const posts = await Post.findAll()
    res.status(200).json({ posts })
  } catch (error) {
    return next(error)
  }
})

router.get('/:id', async function (req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  const post = await Post.findByPk(id)
  res.status(200).json({ post })
})

/* POST create post */
router.post('/', async function (req: any, res: Response, next: NextFunction) {
  const {
    post: { categoryIds, ...rest },
  } = req.body
  try {
    const params = { ...rest, userId: req.user.id }
    await Post.add(params, categoryIds)
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
  const { categoryIds } = req.body
  try {
    const post = await Post.findByPk(id)
    await post!.destroy()
    res.status(200).json({ post })
  } catch (error) {
    console.error(error)
    return next(error)
  }
})

export default router
