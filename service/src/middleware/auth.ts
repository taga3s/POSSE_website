import { NextFunction, Request, Response } from "express"

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (req.query.admin === 'true') {
    console.log("you are admin!")
    next()
    return
  }
  throw new Error("No auth!")
}