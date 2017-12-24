import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Spas from '@/page/spas/spas'
import Forbidden from '@/page/forbidden/forbidden'
import City from '@/page/city/city'
import DetailOne from '@/page/detailone/detailone'
import DetailTwo from '@/page/detailtwo/detailtwo'
import Music from '@/page/music/music'

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
    },
    {
      path: '/forbidden',
      name: 'forbidden',
      component: Forbidden
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detailtwo',
      name: 'detailtwo',
      component: DetailTwo
    },
    {
      path: '/detailone',
      name: 'detailone',
      component: DetailOne
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/hunt',
      name: 'hunt',
      component: Music
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
