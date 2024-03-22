import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import MySupportView from '@/views/supports/MySupportView'
import ModulesAndLessonsView from '@/views/modules/ModulesAndLessonsView.vue'

const routes = [
  {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: 'modulos',
        name: 'campus.modules',
        component: ModulesAndLessonsView
      },
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupportView
      },
      {
        path: '',
        name: 'campus.home',
        component: HomeView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
