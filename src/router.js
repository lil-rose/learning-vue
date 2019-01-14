import Vue from 'vue'
import Router from 'vue-router'

//Importing components:
import Test from '@/test'
import Home from '@/views/Home'
import Prueba from '@/Prueba'
import Prueba2 from '@/Prueba2'
import Prueba3 from '@/Datatable'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: Home
    },
    {
        path: '/test',
        name: 'formtest',
        component: Test,
    },
    {
        path: '/pruebas',
        name: 'pruebas',
        component: Prueba
    },
    {
        path: '/carousel',
        name: 'carousel',
        component: Prueba2
    },
    {
        path: '/datatable',
        //redirect: '/',
        name: 'datatable',
        component: Prueba3
    },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      }
  ]
})
