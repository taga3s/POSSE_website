export interface IChoice {
  name: string
  isCorrect: boolean
}

export interface IChoicesDTO {
  choices_data: IChoice[]
}
