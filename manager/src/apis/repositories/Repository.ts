import axios from 'axios'

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
  }
}
