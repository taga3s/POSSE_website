import { Router } from 'express'
import QuizService from '../services/QuizService.js'
import { quizValValidator } from './middleware/validations/quiz.js'
import { customLogger } from '../utils/logger.js'
const route = Router()
const quizService = new QuizService()
route.get('/', async (req, res, next) => {
  try {
    const { quizzes, choices } = await quizService.getAllQuizzes()
    customLogger.debug(`🔧 debug: ${JSON.stringify({ quizzes, choices })}`)
    return res.status(200).json({ quizzes, choices })
  } catch (e) {
    customLogger.error('🔥 error: %o', e)
    return next(e)
  }
})
route.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const { quiz, choices } = await quizService.getQuizById(id)
    customLogger.debug(JSON.stringify({ quiz, choices }))
    return res.status(200).json({ quiz, choices })
  } catch (e) {
    customLogger.error('🔥 error: %o', e)
    return next(e)
  }
})
route.post('/', quizValValidator, async (req, res, next) => {
  try {
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
    const { status, message } = await quizService.createQuiz(quizDTO, choicesDTO)
    customLogger.debug(`🔧 debug: [${status}] ${message}`)
    return res.status(201).json({ status, message })
  } catch (e) {
    customLogger.error('🔥 error: %o', e)
    return next(e)
  }
})
route.put('/:id', quizValValidator, async (req, res, next) => {
  try {
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
    const { status, message } = await quizService.updateQuiz(id, quizDTO, choicesDTO)
    customLogger.debug(`🔧 debug: [${status}] ${message}`)
    return res.status(204).json({ status, message })
  } catch (e) {
    customLogger.error('🔥 error: %o', e)
    return next(e)
  }
})
route.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const { status, message } = await quizService.deleteQuizById(id)
    customLogger.debug(`🔧 debug: [${status}] ${message}`)
    return res.status(202).json({ status, message })
  } catch (e) {
    customLogger.error('🔥 error: %o', e)
    return next(e)
  }
})
export default route
