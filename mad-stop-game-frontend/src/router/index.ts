import TheHome from '@/components/TheHome.vue'
import { createRouter, createWebHistory } from 'vue-router'
import GameView from '../views/GameView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome,
    },
    {
      path: '/game',
      name: 'game',
      component: GameView,
    },
  ],
})

export default router
