import { createRouter, createWebHistory } from 'vue-router'
import UserView from '@/views/auth/UserView.vue'
import DomainView from '@/views/auth/DomainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'User',
      component: UserView,
    },

    {
      path: '/domain',
      name: 'Domain',
      component: DomainView,
    },
  ],
})

export default router
