import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:{
        name:"Index"
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import("@/views/Login")
    },
    {
      path: '/treaty',
      name: 'Treaty',
      component: () => import("@/views/Treaty")
    },
    {
      path: '*',
      redirect:{
        name: "NotFound"
      }
    },
    {
      path: '/notFound',
      name: 'NotFound',
      component: () => import("@/views/NotFound")
    }
  ]
})
