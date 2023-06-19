<script setup lang="ts">
import TableTr from '../components/features/Quizzes/TableTr.vue'
import { RepositoryFactory } from '../apis/RepositoryFactory'
import { onMounted, ref } from 'vue'

import { TQuiz, TChoice } from '../types'

const quizRepository = RepositoryFactory.get('quiz')
const quizSet = ref<TQuiz[]>([])

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

const deleteQuiz = async (id: number) => {
  if (window.confirm(`Do you really delete id:${id} quiz?`)) {
    const res = await quizRepository.deleteById(id)

    if (res.status === 204) {
      alert(`Successfully deleted id:${id} quiz!`)
      window.location.reload()
    } else {
      alert('Something went wrong...')
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
      <table class="border-spacing-0 border-separate min-w-[720px]">
        <thead>
          <tr>
            <th class="text-center bg-slate-300 py-[10px] px-4 border-y border-l border-table w-5">
              ID
            </th>
            <th class="text-left bg-slate-300 py-[10px] pl-4 border border-table">Questions</th>
          </tr>
        </thead>
        <tbody>
          <TableTr
            v-for="q in quizSet"
            :key="q.id"
            :quiz="q"
            @on-click-delete="(id) => deleteQuiz(id)"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
