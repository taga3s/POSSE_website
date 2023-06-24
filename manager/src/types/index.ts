export type TQuiz = {
  id: number
  img: string
  quiz_text: string
  choices: TChoice[]
  supplement_text: string
  supplement_url: string
}

export type TNewQuiz = Omit<TQuiz, 'id' | 'choices'> & { choices: TNewChoice[] }

export type TUpdateQuiz = TQuiz

export type TChoice = {
  id: number
  isCorrect: number | boolean
  name: string
  quiz_id: number
}

export type TNewChoice = Omit<TChoice, 'id' | 'quiz_id'>
