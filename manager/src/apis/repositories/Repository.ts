import axios from 'axios'
import { TNewQuiz, TUpdateQuiz } from '../../types'

const repository = axios.create({
  headers: {
    'Content-Type': 'Application/json',
    Accept: 'Application/json',
  },
  baseURL: 'http://localhost:8080',
})

export default (resource: string) => {
  return {
    findAll() {
      return repository.get(resource)
    },
    findById(id: number) {
      return repository.get(`${resource}/${id}`)
    },
    create(newQuiz: TNewQuiz) {
      return repository.post(`${resource}`, JSON.stringify(newQuiz))
    },
    update(updateQuiz: TUpdateQuiz) {
      console.log(updateQuiz)
      return repository.put(`${resource}/${updateQuiz.id}`, JSON.stringify(updateQuiz))
    },
    deleteById(id: number) {
      return repository.delete(`${resource}/${id}`)
    },
  }
}
