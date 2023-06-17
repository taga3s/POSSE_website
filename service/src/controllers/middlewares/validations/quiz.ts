import { NextFunction, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'

export const quizValValidator = [
  check('quiz_text').isString().isLength({ min: 1 }).withMessage('必須項目です。'),
  check('img').isString().isLength({ min: 1 }).withMessage('必須項目です。'),
  check('supplement_text').isString(), // nullable: true
  check('supplement_url').isString(), // nullable: true
  check('choices').isArray({ min: 3, max: 3 }).withMessage('選択肢は三つ登録する必要があります。'),

  // error handling
  async (req: Request, res: Response, next: NextFunction) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
      return res.status(422).send({ errors: err.array() })
    }
    next()
  },
]
