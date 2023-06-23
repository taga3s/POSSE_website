export type TQuiz = {
  id: number
  img: string
  quiz_text: string
  choices: TChoice[]
  supplement_text: string
  supplement_url: string
}

export type TNewQuiz = {
  img: string
  quiz_text: string
  choices: TNewChoice[]
  supplement_text: string
  supplement_url: string
}

export type TUpdateQuiz = TNewChoice

export type TChoice = {
  id: number
  isCorrect: number | boolean
  name: string
  quiz_id: number
}

export type TNewChoice = {
  isCorrect: number | boolean
  name: string
}
