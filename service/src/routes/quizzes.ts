import express, { Request, Response } from "express";
import { logger } from "../middleware/logger.js";
import { pool } from "../db/dbconnect.js";

const quizzesRouter = express.Router();
quizzesRouter.use(logger)

type Quiz = {
  id: string,
  text: string
}

let quizzes: Quiz[] = [
  {
    id: "1",
    text: "クイズ1"
  },
  {
    id: "2",
    text: "クイズ2"
  },
  {
    id: "3",
    text: "クイズ3"
  }
]

// sample
quizzesRouter.get("/", async (req: Request, res: Response) => {
  const [rows] = await pool.query("SELECT * FROM quizzes");
  res.status(200).json(rows)
})

quizzesRouter.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const quiz = quizzes.filter((quiz) => quiz.id === id);
  res.status(200).json(quiz)
})

quizzesRouter.post("/", (req: Request, res: Response) => {
  const { id } = req.body;
  const { text } = req.body;

  if (!id || !text) {
    res.status(418).json({ message: "Your request is not enough..." })
  }

  const newQuiz = {
    id: id,
    text: text
  }
  quizzes.push(newQuiz)
  res.status(200).json(newQuiz)
})

quizzesRouter.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const newQuizzes = quizzes.filter((quiz) => quiz.id !== id)
  quizzes = newQuizzes
  res.status(200).json(quizzes)
})

export default quizzesRouter