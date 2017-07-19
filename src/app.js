import Vue from 'vue'

import App from './App.vue'
//import store from './store'没有用到vuex
import router from'./router'

//import _ from 'lodash'
//Vue.prototype._ = _;

//import { sync } from 'vuex-router-sync'

//指令
import directives from './directive'
Object.keys(directives).forEach(key=> Vue.directive( key, directives[key]))

//sync(store, router)


new Vue({
  el:'#app',
  router,
//store,
  render:h=>h(App)
})

