import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../pages/HomeView.vue"
import QuizView from "../pages/QuizView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: "POSSE | ホーム" }
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizView,
    meta: { title: "POSSE | クイズ" }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title as string
  if (title) {
    document.title = title
  }
  next()
})

export default router