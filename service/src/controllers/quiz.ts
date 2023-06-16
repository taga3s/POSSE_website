import { Request, Response, Router } from 'express'
import { validationResult } from 'express-validator'
import { logger } from './middlewares/logger.js'
import QuizService from '../services/QuizService.js'
import { checkQuizVal } from './middlewares/validations/quiz.js'

const route = Router()
route.use(logger)

const quizService = new QuizService()

route.get('/', async (req: Request, res: Response) => {
  const { quizzes, choices, statusCode } = await quizService.getAllQuizzes()
  res.status(statusCode).json({ quizzes, choices })
})

route.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  const { quiz, choices, statusCode } = await quizService.getQuizById(id)
  res.status(statusCode).json({ quiz, choices })
})

route.post('/', checkQuizVal, async (req: Request, res: Response) => {
  const err = validationResult(req)
  if (!err.isEmpty()) {
    console.log(err.mapped())
    res.status(500).send({})
    return
  }

  const { quiz_text, img, supplement_text, supplement_url, choices } = req.body
  const quizDTO = {
    quiz_text,
    img,
    supplement_text,
    supplement_url,
  }
  const choicesDTO = {
    choices_data: choices,
  }
  const { statusCode, status, message } = await quizService.createQuiz(quizDTO, choicesDTO)
  res.status(statusCode).json({ status, message })
})

route.put('/:id', checkQuizVal, async (req: Request, res: Response) => {
  const err = validationResult(req)
  if (!err.isEmpty()) {
    console.log(err.mapped())
    res.status(500).send({})
    return
  }

  const id = req.params.id
  const { quiz_text, img, supplement_text, supplement_url, choices } = req.body
  const quizDTO = {
    quiz_text,
    img,
    supplement_text,
    supplement_url,
  }
  const choicesDTO = {
    choices_data: choices,
  }
  const { statusCode, status, message } = await quizService.updateQuiz(id, quizDTO, choicesDTO)
  res.status(statusCode).json({ status, message })
})

route.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  const { statusCode, status, message } = await quizService.deleteQuizById(id)
  res.status(statusCode).json({ status, message })
})

export default route
