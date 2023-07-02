import { check, validationResult } from 'express-validator'
export const inviteValidator = [
  check('email').isEmail().withMessage('必須項目です。'),
  // error handling
  async (req, res, next) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
      return res.status(422).send({ errors: err.array() })
    }
    next()
  },
]
