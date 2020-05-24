import express from 'express'
import Category from '../models/category'
const router = express.Router()

/* GET categories listing. */
router.get('/', async function (req, res, next) {
  try {
    const categories = await Category.findAll()
    res.status(200).json({ categories })
  } catch (error) {
    return next(error)
  }
})

export default router
