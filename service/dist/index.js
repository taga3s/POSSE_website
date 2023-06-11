import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
const quizzes = [
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
];
app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});
app.get("/quizzes", (req, res) => {
    res.status(200).send(quizzes);
});
app.get("/quizzes/:id", (req, res) => {
    const id = req.params.id;
    const quiz = quizzes.filter((quiz) => quiz.id === id);
    res.status(200).send(quiz);
});
