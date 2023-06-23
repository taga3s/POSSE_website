<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { TQuiz, TChoice } from '../types'

import Hero from '../components/features/Quiz/Hero.vue'
import Quiz from '../components/features/Quiz/Quiz.vue'
import Line from '../components/features/common/Line.vue'
import LineAdd from '../components/features/common/LineAdd.vue'

import { RepositoryFactory } from '../apis/RepositoryFactory'

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

onMounted(() => {
  fetchQuizzes()
})
</script>

<template>
  <article class="l-main">
    <Hero />
    <section class="p-quiz-container" id="js-quiz-area">
      <Quiz v-for="(q, index) in quizSet" :quiz="q" :num="index + 1" :key="q.id" />
    </section>
    <Line />
    <LineAdd />
  </article>
</template>
