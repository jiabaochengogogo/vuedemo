import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  // 路由的默认配置模式会引起访问地址后多了'#'，解决方法：将路由配置成history模式
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/page/home/home'], resolve),
      children: [{
        path: 'list',
        component: resolve => require(['@/page/nav/nav'], resolve),
        name: 'nav'
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
