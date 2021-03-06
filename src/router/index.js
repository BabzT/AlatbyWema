import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '@/views/DashBoard.vue'
import SignUp from '@/views/SignUp.vue'
import Login from '@/views/Login.vue'
import About from '@/views/About.vue'
import Transfer from '@/views/Transfer.vue'


const routes = [
  {
    name:'DashBoard',
    path:'/dashboard',
    component:DashBoard
  },
  {
    name:'SignUp',
    path:'/sign-up',
    component:SignUp
  },
  {
    name:'Login',
    path:'/',
    component:Login
  },
  {
    name:'About',
    path:'/about',
    component:About
  },
  {
    name:'Transfer',
    path:'/transfer',
    component:Transfer
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
