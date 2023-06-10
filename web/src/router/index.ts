import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../pages/HomeView.vue"
import QuizView from "../pages/QuizView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router