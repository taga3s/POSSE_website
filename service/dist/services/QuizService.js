import { ChoicesModel } from '../models/ChoicesModel.js';
import { QuizModel } from '../models/QuizModel.js';
import { checkResponse } from '../utils/checkResponse.js';
export default class QuizService {
    quizModel;
    choicesModel;
    constructor() {
        this.quizModel = new QuizModel();
        this.choicesModel = new ChoicesModel();
    }
    async getAllQuizzes() {
        const quizzes = await this.quizModel.getAll();
        const choices = await this.choicesModel.getAll();
        if (checkResponse(quizzes) && checkResponse(choices)) {
            return { quizzes: quizzes, choices: choices };
        }
        else {
            throw new Error('There is no quiz data');
        }
    }
    async getQuizById(id) {
        const quiz = await this.quizModel.getById(id);
        const choices = await this.choicesModel.getById(id);
        if (checkResponse(quiz) && checkResponse(choices)) {
            return { quiz: quiz, choices: choices };
        }
        else {
            throw new Error(`There is no id:${id} quiz data`);
        }
    }
    async createQuiz(quizDTO, choicesDTO) {
        const quiz_id = await this.quizModel.create(quizDTO);
        if (!quiz_id) {
            throw new Error('Failed posting a new quiz content');
        }
        const isChoicesCreated = await this.choicesModel.create(quiz_id, choicesDTO);
        if (isChoicesCreated) {
            return { status: 'success', message: 'Successfully posted data' };
        }
        else {
            throw new Error('Failed posting a new choices content');
        }
    }
    async updateQuiz(id, quizDTO, choicesDTO) {
        const isQuizUpdated = await this.quizModel.update(id, quizDTO);
        const isChoicesUpdated = await this.choicesModel.update(id, choicesDTO);
        if (isQuizUpdated && isChoicesUpdated) {
            return { status: 'success', message: 'Successfully updated data' };
        }
        else {
            throw new Error(`Failed updating id:${id} quiz data`);
        }
    }
    async deleteQuizById(id) {
        const isChoicesDeleted = await this.choicesModel.deleteById(id);
        const isQuizDeleted = await this.quizModel.deleteById(id);
        if (isChoicesDeleted && isQuizDeleted) {
            return { status: 'success', message: 'Successfully deleted data' };
        }
        else {
            throw new Error(`Failed deleting id:${id} quiz data`);
        }
    }
}
