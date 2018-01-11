import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

import App from './App.vue'
import DisplayItem from './components/DisplayItem.vue'
import CreateItem from './components/CreateItem.vue'
import EditItem from './components/EditItem.vue'
import RegisterUser from './components/RegisterUser.vue'
import DisplayUser from './components/DisplayUser.vue'

const routes = [
  {
    name: 'DisplayItem',
    path: '/',
    component: DisplayItem
  },
  {
    name: 'CreateItem',
    path: '/create/item',
    component: CreateItem
  },
  {
    name: 'EditItem',
    path: '/edit/item/:id',
    component: EditItem
  },
  {
    name: 'RegisterUser',
    path: '/register/user',
    component: RegisterUser
  },
  {
    name: 'DisplayUser',
    path: '/user',
    component: DisplayUser
  }
]

const router = new VueRouter({mode: 'history', routes: routes})
new Vue(Vue.util.extend({router}, App)).$mount('#app')
