import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/auth/LandingView.vue'
import LoginAsView from '@/views/auth/LoginAsView.vue'
import LoginClientView from '@/views/auth/LoginClientView.vue'
import DashboardView from '@/views/auth/DashboardView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingView,
    },

    {
      path: '/loginas',
      name: 'Loginas',
      component: LoginAsView,
    },

    {
      path: '/login_client',
      name: 'LoginClient',
      component: LoginClientView,
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
    },
  ],
})

export default router
