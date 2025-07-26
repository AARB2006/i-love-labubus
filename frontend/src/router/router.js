import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/index.vue'
import MainPage from '@/views/mainPage.vue'

const routes = [
  { 
    path: '/', 
    component: Index,
    name: 'Index'
  },
  {
    path: '/main',
    component: MainPage,
    name: 'MainPage'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
