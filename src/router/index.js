import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(Router)

// 防止重复跳转相同路由
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "Layout",
      component: Layout,
      redirect:{
        name:"Index"
      },
      children: [
        {
          path: '/index',
          name: 'Index',
          component: () => import("@/views/Index")
        },
        {
          path: '/project',
          name: 'Project',
          component: () => import("@/views/Project/Project")
        },
        {
          path: '/projectDetail',
          name: 'ProjectDetail',
          component: () => import("@/views/Project/ProjectDetail")
        },
        {
          path: '/post',
          name: 'Post',
          component: () => import("@/views/Post/Post")
        },
        {
          path: '/course',
          name: 'Course',
          component: () => import("@/views/Course/Course")
        },
        {
          path: '/firm',
          name: 'Firm',
          component: () => import("@/views/Firm/Firm")
        },
        {
          path: '/mentor',
          name: 'Mentor',
          component: () => import("@/views/Mentor/Mentor")
        },
        {
          path: '/his',
          name: 'His',
          component: () => import("@/views/His/His")
        },
        {
          path: '/personal',
          name: 'Personal',
          component: () => import("@/views/Personal/Personal")
        },
      ]
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
