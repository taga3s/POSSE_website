export interface IChoice {
  name: string
  isCorrect: boolean
}

export interface IChoiceDTO {
  choices_data: IChoice[]
}
