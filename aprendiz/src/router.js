import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cadastro from './views/Cadastro'
import Chamada from './views/Chamada'
import Aulas from './views/Aulas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: () => import('./views/Cadastro.vue')
    },
    {
      path: '/chamada',
      name: 'Chamada',
      component: () => import('./views/Chamada.vue')
    },
    {
      path: '/aulas',
      name: 'Aulas',
      component: () => import('./views/Aulas.vue')
    }
  ]
})
