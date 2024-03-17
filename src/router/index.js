import { createWebHistory, createRouter } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import DashboardPage from '../views/DashboardPage.vue'

const routes = [
  {
    path: '/',
    component: LandingPage,
    name: 'landing'
  }, {
    path: '/dashboard',
    component: DashboardPage,
    name: 'dashboard'
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
