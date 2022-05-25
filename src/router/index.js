import { createRouter, createWebHistory } from 'vue-router'
import GuidePage from '../components/GuidePage.vue'
import HomePage from '../components/HomePage.vue'
import IDetail from '../components/Detail.vue'
const routes = [
  {
    path: '/',
    name: 'GuidePage',
    component: GuidePage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path:'/detail',
    name:'detail',
    component:IDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
