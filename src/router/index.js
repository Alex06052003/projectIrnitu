import { createRouter, createWebHistory } from 'vue-router'
import DirectView from '../views/DirectView.vue'
import CenterView from '../views/CenterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/direct',
      name: 'Direct',
      component: DirectView,
    },
    {
      path: '/center',
      name: 'Center',
      component: CenterView,
    }
  ],
})

export default router
