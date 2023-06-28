<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { TQuiz } from '../types'
import { RepositoryFactory } from '../apis/RepositoryFactory'
import { onMounted, ref } from 'vue'
import {
  QuizTextForm,
  ChoicesForm,
  CorrectChoiceForm,
  QuizImageForm,
  SupplementForm,
} from '../components/features/QuizForm'

const route = useRoute()
const router = useRouter()

const updateQuiz = ref<TQuiz & { savedImg: string }>({
  id: 0,
  img: '',
  savedImg: '',
  quiz_text: '',
  choices: [],
  supplement_text: '',
  supplement_url: '',
})

/**
 * functions
 */
const quizRepository = RepositoryFactory.get('quiz')
const fetchQuiz = async () => {
  const id = route.query.id
  if (typeof id !== 'string') {
    return
  }

  const res = await quizRepository.findById(parseInt(id))
  const { quiz, choices } = res.data
  updateQuiz.value = { ...quiz[0], img: '', savedImg: quiz[0].img, choices }
}

const convertImgIntoBase64 = (val: File) => {
  let fileReader = new FileReader()
  fileReader.readAsDataURL(val)
  fileReader.addEventListener('load', (e) => {
    const target = e.target
    if (target && typeof target.result === 'string') {
      updateQuiz.value.img = target.result
    }
  })
}

const submitEditQuiz = async (e: Event) => {
  e.preventDefault()

  const { id, quiz_text, choices, img, supplement_text, supplement_url } = updateQuiz.value
  const response = await quizRepository.update({
    id,
    quiz_text,
    choices,
    img,
    supplement_text,
    supplement_url,
  })
  if (response.status == 204) {
    alert(`status ${response.status}: 正常に問題を編集しました。`)
    router.push('/')
  } else {
    alert(`status ${response.status}: 問題の編集に失敗しました。`)
  }

  router.push('/')
}

onMounted(async () => {
  fetchQuiz()
})
</script>

<template>
  <div class="px-14 py-9 w-full">
    <h2 class="text-4xl font-bold">問題編集</h2>
    <form class="mt-8" @submit="submitEditQuiz">
      <dl>
        <!-- 問題文 -->
        <QuizTextForm v-model:quiz_text="updateQuiz.quiz_text" />

        <!-- 選択肢 -->
        <ChoicesForm :choices="updateQuiz.choices" />

        <!-- 正解の選択肢 -->
        <CorrectChoiceForm :choices="updateQuiz.choices" />

        <!-- 問題の画像 -->
        <QuizImageForm
          :savedImg="updateQuiz.savedImg"
          @on-change-img="(val: File) => convertImgIntoBase64(val)"
        />

        <!-- 補足 -->
        <SupplementForm
          v-model:supplement_text="updateQuiz.supplement_text"
          v-model:supplement_url="updateQuiz.supplement_url"
        />
      </dl>
      <button
        class="w-full mt-8 px-6 py-[6px] bg-blue text-white font-bold text-center rounded-lg hover:shadow-md hover:shadow-slate-500 transition-all duration-200"
      >
        更新
      </button>
    </form>
  </div>
</template>
