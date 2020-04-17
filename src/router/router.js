import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);




let router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Page',
      component: () => import('@/views/Page.vue')

    },

  ]
})

export default router;