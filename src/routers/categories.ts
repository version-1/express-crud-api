import express from 'express'
import User from '../models/user'
const router = express.Router()

/* POST categories listing. */
router.get('/', async function (req, res, next) {
  res.status(200).json({ user: req.user })
})

export default router
