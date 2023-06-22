import express from 'express';
import cors from 'cors';
import { customLogger } from './utils/logger.js';
import Quiz from './controllers/quiz.js';
const app = express();
const port = 8080;
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.listen(port, () => customLogger.info(`Server is running at http://localhost:${port}`));
// routings
app.use('/quiz', Quiz);
