import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '@/views/DashBoard.vue'
import SignUp from '@/views/SignUp.vue'
import Login from '@/views/Login.vue'
import About from '@/views/About.vue'
import Add from '@/views/Add.vue'


const routes = [
  {
    name:'DashBoard',
    path:'/',
    component:DashBoard
  },
  {
    name:'SignUp',
    path:'/sign-up',
    component:SignUp
  },
  {
    name:'Login',
    path:'/login',
    component:Login
  },
  {
    name:'About',
    path:'/about',
    component:About
  },
  {
    name:'Add',
    path:'/add',
    component:Add
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
