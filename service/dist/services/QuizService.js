import { ChoicesModel } from '../models/ChoicesModel.js';
import { QuizModel } from '../models/QuizModel.js';
const quizModel = new QuizModel();
const choicesModel = new ChoicesModel();
export default class QuizService {
    async getAllQuizzes() {
        try {
            const quizzes = await quizModel.getAll();
            const choices = await choicesModel.getAll();
            return { quizzes: quizzes, choices: choices, status: 200 };
        }
        catch (e) {
            console.log(e.message);
            return { quizzes: undefined, choices: undefined, status: 500 };
        }
    }
    async getQuizById(id) {
        try {
            const quiz = await quizModel.getById(id);
            const choices = await choicesModel.getById(id);
            return { quiz: quiz, choices: choices, status: 200 };
        }
        catch (e) {
            console.log(e.message);
            return { quiz: undefined, status: 500 };
        }
    }
    async createQuiz() { }
    async updateQuiz() { }
    async deleteQuiz() { }
}
