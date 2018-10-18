import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home/index')
    },
    {
      path: '/Terms',
      name: 'Terms',
      component: () => import('@/pages/Terms/index')
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: () => import('@/pages/Shop/index')
    }
  ]
})
