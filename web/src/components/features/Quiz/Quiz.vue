<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref } from 'vue'
import { TChoice, TQuiz } from '../../../types'

/**
 * functions
 */
const shuffle = (arr: TChoice[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[j], arr[i]] = [arr[i], arr[j]]
  }
  return arr
}

const setDisabled = (choice_buttons: { disabled: boolean }[]) => {
  choice_buttons.forEach((c: { disabled: boolean }) => {
    c.disabled = true
  })
}

const removeArrows = (choice_buttons: { classList: { remove: (arg0: string) => void } }[]) => {
  choice_buttons.forEach((c: { classList: { remove: (arg0: string) => void } }) => {
    c.classList.remove('is-attached-arrow')
  })
}

const checkAnswer = (isCorrect: number) => {
  setDisabled(choice_buttons.value)
  removeArrows(choice_buttons.value)
  selectedChoice.value = isCorrect

  if (isCorrect && answer_title.value) {
    answer.value.classList.add('u-display-block', 'u-bg-color-pink')
    answer_title.value.innerText = '正解'
    answer_title.value.classList.add('u-color-red')
  } else {
    answer.value.classList.add('u-display-block', 'u-bg-color-lightblue')
    answer_title.value.innerText = '不正解...'
    answer_title.value.classList.add('u-color-blue')
  }
}

/**
 * state
 */
const props = defineProps<{ quiz: TQuiz; num: number }>()
const shuffledChoices = ref<TChoice[]>(shuffle(props.quiz.choices))
const selectedChoice = ref<number | null>(null)

const choice_buttons = ref<any>(null)
const answer = ref<any>(null)
const answer_title = ref<any>(null)
</script>

<template>
  <div class="p-quiz js-quiz">
    <div class="p-quiz__header">
      <div class="p-quiz__header__quiz-label">Q{{ num }}</div>
      <span class="p-quiz__header__question">{{ props.quiz.quiz_text }}</span>
      <figure class="p-quiz__header__image">
        <img :src="`/img/quiz/${props.quiz.img}`" alt="クイズイメージ" />
      </figure>
    </div>
    <div class="p-quiz__answer-label">A</div>
    <div class="p-quiz__answer-box">
      <ul class="p-quiz__answer-box__choices">
        <li v-for="(c, index) in shuffledChoices" :key="index">
          <button
            class="p-quiz__answer-box__choices__button is-attached-arrow js-choice"
            @click="checkAnswer(c.isCorrect)"
            ref="choice_buttons"
          >
            {{ c.name }}
          </button>
        </li>
      </ul>
      <div class="p-quiz__answer-box__answer js-answer" ref="answer">
        <div class="p-quiz__answer-box__answer__textbox">
          <span ref="answer_title"></span>
          <div>
            <span>A</span>
            <span>
              {{ props.quiz.choices.find((c) => c.isCorrect === 1)?.name }}
            </span>
          </div>
        </div>
      </div>
      <cite v-if="props.quiz.supplement_text">
        <a :href="props.quiz.supplement_url">{{ props.quiz.supplement_text }}</a></cite
      >
    </div>
  </div>
</template>
