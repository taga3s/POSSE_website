import express, { Express } from 'express'
import Quiz from './api/routes/quiz.js'

const app: Express = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))

// routings
app.use('/quiz', Quiz)
