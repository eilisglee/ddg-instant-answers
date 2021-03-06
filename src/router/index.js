import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'

Vue.use(VueRouter)

const routes = [

   {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'search',
    component: Search
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router