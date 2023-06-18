import { createRouter, createWebHistory } from 'vue-router'
import QuizzesView from '../pages/QuizzesView.vue'
import CreateView from '../pages/CreateView.vue'
import EditView from '../pages/EditView.vue'
import InviteView from '../pages/InviteView.vue'
import NotFoundView from '../pages/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'quizzes',
    component: QuizzesView,
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView,
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditView,
  },
  {
    path: '/invite',
    name: 'invite',
    component: InviteView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: { title: 'NotFound 404' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
