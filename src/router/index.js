import { createRouter, createWebHistory } from 'vue-router'
// import GuidePage from '../components/GuidePage.vue'
const GuidePage = () => import('../components/GuidePage.vue')
// import HomePage from '../components/HomePage.vue'
const HomePage = () => import('../components/HomePage.vue')
// import IDetail from '../components/Detail.vue'
const IDetail = () => import('../components/Detail.vue')

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
    path:'/detail/:id',
    name:'detail',
    component:IDetail
    
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
