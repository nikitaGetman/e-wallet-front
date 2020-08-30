import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import { createMiddlewarePipeline, auth, notAuth, notFound } from '@/router/middleware'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'appLogin',
    component: () => import(/* webpackChunkName: "AuthLayout" */ '@/layouts/AppLogin'),
    redirect: { name: 'login' },
    meta: {
      middleware: [notAuth]
    },
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "Auth" */ '@/views/Login')
      },
      {
        path: '/registration',
        name: 'registration',
        component: () => import(/* webpackChunkName: "Registration" */ '@/views/Registration')
      }
    ]
  },
  {
    path: '/',
    name: 'appPage',
    component: () => import(/* webpackChunkName: "AuthLayout" */ '@/layouts/AppPage'),
    redirect: { name: 'summary' },
    meta: {
      middleware: [auth]
    },
    children: [
      {
        path: '/',
        name: 'summary',
        component: () => import(/* webpackChunkName: "summary" */ '@/views/Summary.vue')
      },
      {
        path: '/history',
        name: 'history',
        component: () => import(/* webpackChunkName: "history" */ '@/views/History.vue')
      },
      {
        path: '/transfer',
        name: 'transfer',
        component: () => import(/* webpackChunkName: "transfer" */ '@/views/Transfer.vue')
      },
      {
        path: '/account',
        name: 'account',
        component: () => import(/* webpackChunkName: "account" */ '@/views/Account.vue')
      }
    ]
  },

  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound'),
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '*',
    name: 'not-found',
    redirect: { name: '404' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const middleware = to.matched.reduce(
    (guards, matchedRoute) => {
      const routeGuards = matchedRoute.meta.middleware
        ? matchedRoute.meta.middleware.filter(someGuard => !guards.includes(someGuard))
        : []

      return routeGuards.length ? [...guards, ...routeGuards] : guards
    },
    [notFound]
  )

  createMiddlewarePipeline({ to, from, next, store }, middleware)()
})

export default router
