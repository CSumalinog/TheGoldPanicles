import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/auth/LandingView.vue'
import LoginAsView from '@/views/auth/LoginAsView.vue'
import ClientTypeView from '@/views/auth/ClienTypeView.vue'

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
      path: '/client_type',
      name: 'ClientType',
      component: ClientTypeView,
    },

    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },

    
  ],
})


export default router

