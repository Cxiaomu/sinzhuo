// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import ElementUI, { TabPane } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'
import 'element-ui/lib/theme-chalk/display.css';
import './assets/icon/iconfont.css'
import './styles/global.scss'
import store from './store/index'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 路由全局守卫
router.beforeEach((to, from, next) => {
  to,from;
  if (to.fullPath === from.fullPath) {
    return
  } else {
    next();
  }
})

// 页面跳转 滚动到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
