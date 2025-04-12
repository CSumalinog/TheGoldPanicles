import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/auth/LandingView.vue'
import LoginAsView from '@/views/auth/LoginAsView.vue'
import StafferLoginView from '@/views/auth/StafferLoginView.vue'
import StafferSignupView from '@/views/auth/StafferSignupView.vue'


import LoginClientView from '@/views/auth/LoginClientView.vue'
import LoginView from '@/views/auth/LoginView.vue'

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
      path: '/login',
      name: 'Login',
      component: LoginView,
    },

    {
      path: '/staffer_login',
      name: 'StafferLogin',
      component: StafferLoginView,
    },

    {
      path: '/staffer_signup',
      name: 'StafferSignup',
      component: StafferSignupView,
    }

  ],
})


export default router

