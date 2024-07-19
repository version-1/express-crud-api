import { Request } from 'express'
import User from '../models/user'

type Context = { user: User }
export type RequestWithContext = Request & Context
