import express from "express";
import quizzesRouter from "./routes/quizzes.js";
const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
// routings
app.use("/quizzes", quizzesRouter);
