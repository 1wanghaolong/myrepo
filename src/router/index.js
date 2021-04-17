import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import zhuce from '../views/login/zhuce.vue'
import denglu from '../views/login/denglu.vue'
import gouwuche from '../views/gouwuche/index.vue'
import shezhi from '../views/shezhi/index.vue'
import gengduo from '../views/gengduo/index.vue'
import serch from '../views/serch/index.vue'
import dizhi from '../views/dizhi/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/dizhi',
    name: 'dizhi',
    component: dizhi
  },
  {
    path: '/serch',
    name: 'serch',
    component: serch
  },
  {
    path: '/',
    name: 'Home',
    component: Home
    // redirect: {
    //   name: 'tuijian'
    // }, // 路由重定向
  },
  {
    path: '/zhuce',
    name: 'zhuce',
    component: zhuce
  },
  {
    path: '/denglu',
    name: 'denglu',
    component: denglu
  },
  {
    path: '/gouwuche',
    name: 'gouwuche',
    component: gouwuche
  },
  {
    path: '/shezhi',
    name: 'shezhi',
    component: shezhi
  },
  {
    path: '/gengduo',
    name: 'gengduo',
    component: gengduo
  }
]

const router = new VueRouter({
  routes
})

export default router
