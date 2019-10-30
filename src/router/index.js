import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Class from '../views/Class.vue'
import Food from '../views/Food.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props:true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/class',
    name:'Class',
    component:Class
  },
  {
    path:'/food',
    name:'Food',
    component:Food
  }
]

const router = new VueRouter({
  routes
})

export default router
