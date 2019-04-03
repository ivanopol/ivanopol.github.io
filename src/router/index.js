import Vue from 'vue'
import Router from 'vue-router'
import Siema from 'vue2-siema'

Vue.use(Router)
Vue.use(Siema)
// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

export default new Router({
  routes: []
})
