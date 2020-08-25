import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'summary',
      component: () => import(/* webpackChunkName: "summary" */ '../views/Summary.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: () => import(/* webpackChunkName: "transfer" */ '../views/Transfer.vue')
    }
  ]
})

export default router
