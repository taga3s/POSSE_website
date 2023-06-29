import QuizRepository from './repositories/QuizRepository'
import UserRepository from './repositories/UserRepository'

interface repositoryObject {
  [name: string]: any
}

const repositories: repositoryObject = {
  quiz: QuizRepository,
  user: UserRepository,
}

export const RepositoryFactory = {
  get: (name: string) => repositories[name],
}
