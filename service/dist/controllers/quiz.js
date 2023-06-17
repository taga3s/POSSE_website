import { Router } from 'express'
import QuizService from '../services/QuizService.js'
import { quizValValidator } from './middlewares/validations/quiz.js'
const route = Router()
const quizService = new QuizService()
route.get('/', async (req, res) => {
  const { quizzes, choices, statusCode } = await quizService.getAllQuizzes()
  res.status(statusCode).json({ quizzes, choices })
})
route.get('/:id', async (req, res) => {
  const id = req.params.id
  const { quiz, choices, statusCode } = await quizService.getQuizById(id)
  res.status(statusCode).json({ quiz, choices })
})
route.post('/', quizValValidator, async (req, res) => {
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
route.put('/:id', quizValValidator, async (req, res) => {
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
route.delete('/:id', async (req, res) => {
  const id = req.params.id
  const { statusCode, status, message } = await quizService.deleteQuizById(id)
  res.status(statusCode).json({ status, message })
})
export default route
