import { NextFunction, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'

export const inviteValidator = [
  check('email').isEmail().withMessage('必須項目です。'),

  // error handling
  async (req: Request, res: Response, next: NextFunction) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
      return res.status(422).send({ errors: err.array() })
    }
    next()
  },
]
