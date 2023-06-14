import QuizRepository from './repositories/QuizRepository'

interface repositoryObject {
  [name: string]: any
}

const repositories: repositoryObject = {
  quiz: QuizRepository
}

export const RepositoryFactory = {
  get: (name: string) => repositories[name]
}