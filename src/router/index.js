import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import DetailOne from '@/page/detailone/detailone'
import DetailTwo from '@/page/detailtwo/detailtwo'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/detailone',
      name: 'detailone',
      component: DetailOne
    },
    {
      path: '/detailtwo',
      name: 'detailtwo',
      component: DetailTwo
    }
  ]
})
