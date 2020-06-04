import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Results from '@/views/Results.vue'

Vue.use(VueRouter)

  const routes = [
    
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/results',
    name: 'results',
    component: Results
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router