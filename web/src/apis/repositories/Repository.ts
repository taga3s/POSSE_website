import axios from 'axios'

const repository = axios.create({
  headers: {
    'Content-Type': 'Application/json',
    Accept: 'Application/json',
  },
  baseURL: `${import.meta.env.VITE_API_ENDPOINT}`,
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
