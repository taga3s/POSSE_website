import QuizRepository from './repositories/QuizRepository'

interface repositoryObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [name: string]: any
}

const repositories: repositoryObject = {
  quiz: QuizRepository,
}

export const RepositoryFactory = {
  get: (name: string) => repositories[name],
}
