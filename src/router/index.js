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
          path: '/postDetail',
          name: 'PostDetail',
          component: () => import("@/views/Post/PostDetail")
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
          component: () => import("@/views/Personal/Personal"),
          redirect:{
            name:"MyNews"
          },
          children: [
            {
              path: '/myNews',
              name: 'MyNews',
              component: () => import("@/views/Personal/MyNews/MyNews")
            },
            {
              path: '/myCourse',
              name: 'MyCourse',
              component: () => import("@/views/Personal/MyCourse/MyCourse")
            },
            {
              path: '/myFirm',
              name: 'MyFirm',
              component: () => import("@/views/Personal/MyFirm/MyFirm")
            },
            {
              path: '/myFocus',
              name: 'MyFocus',
              component: () => import("@/views/Personal/MyFocus/MyFocus")
            },
            {
              path: '/myPost',
              name: 'MyPost',
              component: () => import("@/views/Personal/MyPost/MyPost")
            },
            {
              path: '/myProject',
              name: 'MyProject',
              component: () => import("@/views/Personal/MyProject/MyProject")
            },
            {
              path: '/mySetting',
              name: 'MySetting',
              component: () => import("@/views/Personal/MySetting/MySetting")
            },
          ]
        },
        {
          path: '/createProject',
          name: 'CreateProject',
          component: () => import("@/views/Personal/MyProject/CreateProject")
        },
        {
          path: '/createPost',
          name: 'CreatePost',
          component: () => import("@/views/Personal/MyPost/CreatePost")
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
