import { check } from 'express-validator';
export const checkQuizVal = [
    check('quiz_text').notEmpty().isString().isLength({ min: 1 }),
    check('img').notEmpty().isString().isLength({ min: 1 }),
    check('supplement_text').notEmpty().isString().isLength({ min: 1 }),
    check('supplement_url').notEmpty().isString().isLength({ min: 1 }),
    check('choices').notEmpty().isArray({ min: 3, max: 3 }),
];
