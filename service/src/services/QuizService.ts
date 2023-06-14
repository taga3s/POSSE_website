import { IChoicesDTO } from '../interfaces/IChoices.js'
import { IQuizDTO } from '../interfaces/IQuiz.js'
import { ChoicesModel } from '../models/ChoicesModel.js'
import { QuizModel } from '../models/QuizModel.js'

const quizModel = new QuizModel()
const choicesModel = new ChoicesModel()

//TODO: エラーハンドリング見直したい
// TODO: Refactoring,  put or patch -> PR
// TODO: フロントエンドとの繋ぎこみ

export default class QuizService {
  public async getAllQuizzes() {
    try {
      const quizzes = await quizModel.getAll()
      const choices = await choicesModel.getAll()
      return { quizzes: quizzes, choices: choices, statusCode: 200 }
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      return { quizzes: null, choices: null, statusCode: 500 }
    }
  }

  public async getQuizById(id: string) {
    try {
      const quiz = await quizModel.getById(id)
      const choices = await choicesModel.getById(id)
      return { quiz: quiz, choices: choices, statusCode: 200 }
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
      return { quiz: null, statusCode: 500 }
    }
  }

  public async createQuiz(quizDTO: IQuizDTO, choicesDTO: IChoicesDTO) {
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

  public async updateQuiz(id: string, quizDTO: IQuizDTO, choicesDTO: IChoicesDTO) {
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

  public async deleteQuizById(id: string) {
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
