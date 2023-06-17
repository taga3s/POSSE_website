import { IChoicesDTO } from '../interfaces/IChoices.js'
import { IQuizDTO } from '../interfaces/IQuiz.js'
import { ChoicesModel } from '../models/ChoicesModel.js'
import { QuizModel } from '../models/QuizModel.js'
import { checkResponse } from '../utils/checkResponse.js'

const quizModel = new QuizModel()
const choicesModel = new ChoicesModel()

// TODO: imgは後で保存処理を作る
// appendix: 疑似DI

export default class QuizService {
  public async getAllQuizzes() {
    const quizzes = await quizModel.getAll()
    const choices = await choicesModel.getAll()

    if (checkResponse(quizzes) && checkResponse(choices)) {
      return { quizzes: quizzes, choices: choices }
    } else {
      throw new Error('There is no quiz data')
    }
  }

  public async getQuizById(id: string) {
    const quiz = await quizModel.getById(id)
    const choices = await choicesModel.getById(id)

    if (checkResponse(quiz) && checkResponse(choices)) {
      return { quiz: quiz, choices: choices }
    } else {
      throw new Error(`There is no id:${id} quiz data`)
    }
  }

  public async createQuiz(quizDTO: IQuizDTO, choicesDTO: IChoicesDTO) {
    const quiz_id = await quizModel.create(quizDTO)
    if (!quiz_id) {
      throw new Error('Failed posting a new quiz content')
    }

    const isChoicesCreated = await choicesModel.create(quiz_id, choicesDTO)
    if (isChoicesCreated) {
      return { status: 'success', message: 'Successfully posted data' }
    } else {
      throw new Error('Failed posting a new choices content')
    }
  }

  public async updateQuiz(id: string, quizDTO: IQuizDTO, choicesDTO: IChoicesDTO) {
    const isQuizUpdated = await quizModel.update(id, quizDTO)
    const isChoicesUpdated = await choicesModel.update(id, choicesDTO)
    if (isQuizUpdated && isChoicesUpdated) {
      return { status: 'success', message: 'Successfully updated data' }
    } else {
      throw new Error(`Failed updating id:${id} quiz data`)
    }
  }

  public async deleteQuizById(id: string) {
    const isChoicesDeleted = await choicesModel.deleteById(id)
    const isQuizDeleted = await quizModel.deleteById(id)
    if (isChoicesDeleted && isQuizDeleted) {
      return { status: 'success', message: 'Successfully deleted data' }
    } else {
      throw new Error(`Failed deleting id:${id} quiz data`)
    }
  }
}
