import Vue from 'vue'
import Router from 'vue-router'
import Cadastro from 'frontend/Cadastro.vue'
import Login from 'frontend/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro_usuario',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  linkActiveClass: 'active'
})
