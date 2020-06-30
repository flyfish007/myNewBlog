import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
      component: () => import(/* webpackChunkName: "about" */ '../views/dashboard.vue')
  },
      {
          path: '/home',
          name: '业务员未签收预警',
          component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
