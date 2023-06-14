import { Request, Response, Router } from 'express'
import { logger } from './middlewares/logger.js'
import QuizService from '../services/QuizService.js'

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

route.post('/', async (req: Request, res: Response) => {
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

// TODO: imgは後で
route.patch('/:id', async (req: Request, res: Response) => {
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
