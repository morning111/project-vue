import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
<<<<<<< HEAD
import Spas from '@/page/spas/spas'
=======
import City from '@/page/city/city'
>>>>>>> eadc78d3dede00a0e512d41cfd162895d608fb38

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
<<<<<<< HEAD
      path: '/spas',
      name: 'spas',
      component: Spas
=======
      path: '/city',
      name: 'city',
      component: City
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
>>>>>>> eadc78d3dede00a0e512d41cfd162895d608fb38
    }
  }
})
