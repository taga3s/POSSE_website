import { createRouter, createWebHistory } from 'vue-router'
import {
  QuizzesView,
  CreateView,
  EditView,
  InviteView,
  NotFoundView,
  LoginView,
  SignupView
} from '../pages'


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
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
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
