import { check } from 'express-validator'
export const quizValValidator = [
  check('quiz_text').isString().isLength({ min: 1 }).withMessage('必須項目です。'),
  check('img').isString().isLength({ min: 1 }).withMessage('必須項目です。'),
  check('supplement_text').isString(),
  check('supplement_url').isString(),
  check('choices').isArray({ min: 3, max: 3 }).withMessage('選択肢は三つ登録する必要があります。'),
]
