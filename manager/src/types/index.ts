export type TQuiz = {
  id: number
  img: string
  quiz_text: string
  choices: TChoice[]
  supplement_text: string
  supplement_url: string
}

export type TChoice = {
  id: number
  isCorrect: number | boolean
  name: string
  quiz_id: number
}
