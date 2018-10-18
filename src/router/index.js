import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/index'
import Terms from '@/pages/Terms/index'
import Shop from '@/pages/Shop/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Terms',
      name: 'Terms',
      component: Terms
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
