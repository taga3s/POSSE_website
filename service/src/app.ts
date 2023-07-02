import express, { Express } from 'express'
import cors from 'cors'
import session from 'express-session'
import { customLogger } from './utils/logger.js'
import Quiz from './controllers/quiz.js'
import User from './controllers/user.js'

const app: Express = express()
const port = 8080

app.use(cors())
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 30,
    },
  }),
)
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }))

app.listen(port, () => customLogger.info(`Server is running at http://localhost:${port}`))

// routings
app.use('/quiz', Quiz)
app.use('/user', User)
