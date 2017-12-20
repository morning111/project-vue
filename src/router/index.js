import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Spas from '@/page/spas/spas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/spas',
      name: 'spas',
      component: Spas
    }
  ]
})
