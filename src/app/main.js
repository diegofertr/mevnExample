import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

import App from './App.vue'
import DisplayItem from './components/DisplayItem.vue'

const routes = [{
  name: 'DisplayItem',
  path: '/',
  component: DisplayItem
}]

const router = new VueRouter({mode: 'history', routes: routes})
new Vue(Vue.util.extend({router}, App)).$mount('#app')
