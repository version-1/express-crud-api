import express from 'express'
import Post from '../models/post'
import PostCategory from '../models/postCategory'
import Category from '../models/category'
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
  try {
    const posts = await Post.findAll()
    res.status(200).json({ posts })
  } catch (error) {
    return next(error)
  }
})

export default router
