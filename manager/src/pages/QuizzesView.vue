<script setup lang="ts">
import { TableItem, Table } from '../components/features/Quizzes'
import { RepositoryFactory } from '../apis/RepositoryFactory'
import { onMounted, ref } from 'vue'

import { TQuiz, TChoice } from '../types'

const quizRepository = RepositoryFactory.get('quiz')
const quizSet = ref<TQuiz[]>([])

/**
 * functions
 */
const fetchQuizzes = async () => {
  const res = await quizRepository.findAll()
  const quizzes: TQuiz[] = res.data.quizzes
  const allChoices: TChoice[] = res.data.choices

  quizzes.forEach((quiz) => {
    const choices = allChoices.filter((c) => c.quiz_id == quiz.id)
    quiz.choices = choices
    quizSet.value.push(quiz)
  })
}

const deleteQuizById = async (id: number) => {
  if (window.confirm(`Do you really delete id:${id} quiz?`)) {
    const res = await quizRepository.deleteById(id)

    if (res.status === 204) {
      alert(`status:${res.status} Successfully deleted id:${id} quiz!`)
      window.location.reload()
    } else {
      alert(`status:${res.status} Something went wrong...`)
    }
  } else {
    return
  }
}

onMounted(() => {
  fetchQuizzes()
})
</script>

<template>
  <div class="px-14 py-9">
    <div class="flex flex-col gap-9 w-auto">
      <label class="text-4xl font-bold">問題一覧</label>
      <Table v-if="quizSet.length">
        <TableItem
          v-for="q in quizSet"
          :key="q.id"
          :quiz="q"
          @on-click-delete="(id) => deleteQuizById(id)"
        />
      </Table>
      <span v-else>データが取得できませんでした。クイズを登録し忘れていませんか？</span>
    </div>
  </div>
</template>
