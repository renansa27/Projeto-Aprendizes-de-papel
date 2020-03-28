import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CadastroAluno from './views/Cadastro/aluno'
import CadastroProfessor from './views/Cadastro/professor'
import CadastroFuncionario from './views/Cadastro/funcionario'
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
    //Cadastro (Alunos, Professores e funcionários)
    {
      path: '/cadastro/aluno',
      name: 'Cadastro aluno',
      component: () => import('./views/Cadastro/aluno')
    },
    {
      path: '/cadastro/professor',
      name: 'Cadastro professor',
      component: () => import('./views/Cadastro/professor')
    },
    {
      path: '/cadastro/funcionario',
      name: 'Cadastro funcionário',
      component: () => import('./views/Cadastro/funcionario')
    },
    //********************/
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
