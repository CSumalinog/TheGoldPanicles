import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/auth/LandingView.vue'
import LoginAsView from '@/views/auth/LoginAsView.vue'
import ClientLoginView from '@/views/auth/ClientLoginView.vue'
import AdminLoginView from '@/views/auth/AdminLoginView.vue'
import StafferLoginView from '@/views/auth/StafferLoginView.vue'



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
      path: '/client_login',
      name: 'ClientLogin',
      component: ClientLoginView,
    },

    {
      path: '/admin_login',
      name: 'AdminLogin',
      component: AdminLoginView,
    },

    {
      path: '/staffer_login',
      name: 'StafferLogin',
      component: StafferLoginView,
    }
  ],
})


export default router

