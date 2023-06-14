import { Router } from 'express'
import { logger } from '../middlewares/logger.js'
const route = Router()
route.use(logger)
route.get('/', async (req, res) => {
  const { choices, status } = await choiceService.getAllChoices()
  res.status(status).json(choices)
})
