import fs from 'fs';
import crypto from 'crypto';
import { __dirname } from '../configs/path.js';
import { ChoicesModel } from '../models/ChoicesModel.js';
import { QuizModel } from '../models/QuizModel.js';
import { checkResponse } from '../utils/checkResponse.js';
const quizModel = new QuizModel();
const choicesModel = new ChoicesModel();
const saveImgToLocal = (img) => {
    const base64str = img.replace('data:image/png;base64,', '');
    const fileName = `${crypto.randomUUID()}.png`;
    fs.promises.writeFile(`/${__dirname}/../../../web/public/img/quiz/${fileName}`, base64str, {
        encoding: 'base64',
    });
    return fileName;
};
// appendix: 疑似DI
export default class QuizService {
    async getAllQuizzes() {
        const quizzes = await quizModel.getAll();
        const choices = await choicesModel.getAll();
        if (checkResponse(quizzes) && checkResponse(choices)) {
            return { quizzes: quizzes, choices: choices };
        }
        else {
            throw new Error('There is no quiz data');
        }
    }
    async getQuizById(id) {
        const quiz = await quizModel.getById(id);
        const choices = await choicesModel.getById(id);
        if (checkResponse(quiz) && checkResponse(choices)) {
            return { quiz: quiz, choices: choices };
        }
        else {
            throw new Error(`There is no id:${id} quiz data`);
        }
    }
    async createQuiz(quizDTO, choicesDTO) {
        const fileName = saveImgToLocal(quizDTO.img);
        const quiz_id = await quizModel.create(quizDTO, fileName);
        if (!quiz_id) {
            throw new Error('Failed posting a new quiz content');
        }
        const isChoicesCreated = await choicesModel.create(quiz_id, choicesDTO);
        if (isChoicesCreated) {
            return { status: 'success', message: 'Successfully posted data' };
        }
        else {
            throw new Error('Failed posting a new choices content');
        }
    }
    async updateQuiz(id, quizDTO, choicesDTO) {
        const isQuizUpdated = await quizModel.update(id, quizDTO);
        const isChoicesUpdated = await choicesModel.update(id, choicesDTO);
        if (isQuizUpdated && isChoicesUpdated) {
            return { status: 'success', message: 'Successfully updated data' };
        }
        else {
            throw new Error(`Failed updating id:${id} quiz data`);
        }
    }
    async deleteQuizById(id) {
        const isChoicesDeleted = await choicesModel.deleteById(id);
        const isQuizDeleted = await quizModel.deleteById(id);
        if (isChoicesDeleted && isQuizDeleted) {
            return { status: 'success', message: 'Successfully deleted data' };
        }
        else {
            throw new Error(`Failed deleting id:${id} quiz data`);
        }
    }
}
