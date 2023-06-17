import { ChoicesModel } from '../models/ChoicesModel.js'
import { QuizModel } from '../models/QuizModel.js'
import { customLogger } from '../utils/logger.js'
const quizModel = new QuizModel()
const choicesModel = new ChoicesModel()
//TODO: エラーハンドリング見直したい
//TODO: fetch側 json.parse()
// TODO: imgは後で保存処理を作る
// appendix: 疑似DI
export default class QuizService {
  async getAllQuizzes() {
    try {
      const quizzes = await quizModel.getAll()
      const choices = await choicesModel.getAll()
      customLogger.debug(JSON.stringify({ quizzes, choices }))
      return { quizzes: quizzes, choices: choices, statusCode: 200 }
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      return { quizzes: null, choices: null, statusCode: 500 }
    }
  }
  async getQuizById(id) {
    try {
      const quiz = await quizModel.getById(id)
      const choices = await choicesModel.getById(id)
      customLogger.debug(JSON.stringify({ quiz, choices }))
      return { quiz: quiz, choices: choices, statusCode: 200 }
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      return { quiz: null, statusCode: 500 }
    }
  }
  async createQuiz(quizDTO, choicesDTO) {
    try {
      const quiz_id = await quizModel.create(quizDTO)
      await choicesModel.create(quiz_id, choicesDTO)
      return { statusCode: 201, status: 'success', message: 'successfully posted data' }
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      return {
        statusCode: 500,
        status: '500 Internal Server Error',
        message: error instanceof Error ? error.message : 'something went wrong...',
      }
    }
  }
  async updateQuiz(id, quizDTO, choicesDTO) {
    try {
      await quizModel.update(id, quizDTO)
      await choicesModel.update(id, choicesDTO)
      return { statusCode: 201, status: 'success', message: 'successfully posted data' }
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      return {
        statusCode: 500,
        status: '500 Internal Server Error',
        message: error instanceof Error ? error.message : 'something went wrong...',
      }
    }
  }
  async deleteQuizById(id) {
    try {
      await choicesModel.deleteById(id)
      await quizModel.deleteById(id)
      return { statusCode: 202, status: 'success', message: 'successfully deleted data' }
    } catch (error) {
      return {
        statusCode: 500,
        status: '500 Internal Server Error',
        message: error instanceof Error ? error.message : 'something went wrong...',
      }
    }
  }
}
