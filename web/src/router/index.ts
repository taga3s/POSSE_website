import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, QuizView, NotFoundView } from '../pages'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'POSSE | ホーム' },
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizView,
    meta: { title: 'POSSE | クイズ' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: { title: 'POSSE | お探しのページが見つかりません' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, _, next) => {
  const title = to.meta.title as string
  if (title) {
    document.title = title
  }
  next()
})

export default router
