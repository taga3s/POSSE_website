import { check, validationResult } from 'express-validator'
export const createValidator = [
  check('quiz_text').isString().isLength({ min: 1 }).withMessage('必須項目です。'),
  check('img').isString().isLength({ min: 1 }).withMessage('必須項目です。'),
  check('supplement_text').isString(),
  check('supplement_url').isString(),
  check('choices').isArray({ min: 3, max: 3 }).withMessage('選択肢は三つ登録する必要があります。'),
  // error handling
  async (req, res, next) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
      return res.status(422).send({ errors: err.array() })
    }
    next()
  },
]
export const updateValidator = [
  check('quiz_text').isString().isLength({ min: 1 }).withMessage('必須項目です。'),
  check('img').isString(),
  check('supplement_text').isString(),
  check('supplement_url').isString(),
  check('choices').isArray({ min: 3, max: 3 }).withMessage('選択肢は三つ登録する必要があります。'),
  // error handling
  async (req, res, next) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
      return res.status(422).send({ errors: err.array() })
    }
    next()
  },
]
