import { ChoicesModel } from '../models/ChoicesModel.js'
import { QuizModel } from '../models/QuizModel.js'

const quizModel = new QuizModel()
const choicesModel = new ChoicesModel()

export default class QuizService {
  public async getAllQuizzes() {
    try {
      const quizzes = await quizModel.getAll()
      const choices = await choicesModel.getAll()
      return { quizzes: quizzes, choices: choices, status: 200 }
    } catch (e: any) {
      console.log(e.message)
      return { quizzes: undefined, choices: undefined, status: 500 }
    }
  }

  public async getQuizById(id: string) {
    try {
      const quiz = await quizModel.getById(id)
      const choices = await choicesModel.getById(id)
      return { quiz: quiz, choices: choices, status: 200 }
    } catch (e: any) {
      console.log(e.message)
      return { quiz: undefined, status: 500 }
    }
  }

  public async createQuiz() { }
  public async updateQuiz() { }
  public async deleteQuiz() { }
}
