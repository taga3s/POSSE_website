import express, { Express } from 'express'
import cors from 'cors'
import Quiz from './controllers/quiz.js'

const app: Express = express()
const port = 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))

// routings
app.use('/quiz', Quiz)
