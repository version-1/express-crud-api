import express from 'express'
import Post, { Categories } from '../models/post'
import PostCategory from '../models/postCategory'
import Category from '../models/category'
import conn from '../models'
const router = express.Router()

/* GET categories listing. */
router.get('/', async function (req, res, next) {
  try {
    const posts = await Post.findAll()
    res.status(200).json({ posts })
  } catch (error) {
    return next(error)
  }
})

/* POST create post */
router.post('/', async function (req, res, next) {
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

export default router
