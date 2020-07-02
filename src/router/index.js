import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Summary',
      component: () => import(/* webpackChunkName: "summary" */ '../views/Summary.vue')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
    }
  ]
})

export default router
