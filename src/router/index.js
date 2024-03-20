import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children:[
      {
        path:'',
        name:'campus.home',
        component:HomeView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
