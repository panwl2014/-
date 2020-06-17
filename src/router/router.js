import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决当前路由重复点击
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter);

const routes = [
  { path: '/', component: () => import('../views/Login.vue') },
  { path: '/home', component: () => import('../views/Home.vue') },
  { path: '/map', component: () => import('../components/worldMap.vue') },
  { path: '/map3d', component: () => import('../components/Map3D.vue') },
  { path: '/datav', component: () => import('../views/Datav.vue') }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

router.beforeEach((to, from, next) => {
  let isLogin = localStorage.getItem('token')

  if (to.path == '/') {
    if (isLogin) {
      next('/home')
    } else {
      next()
    }
  } else {
    if (isLogin) {
      next()
    } else {
      next('/')
    }
  }
})
