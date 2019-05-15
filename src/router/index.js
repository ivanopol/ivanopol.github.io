import Vue from 'vue'
import Router from 'vue-router'
import Vuelidate from 'vuelidate'
import Siema from 'vue2-siema'
import VueScrollProgress from './scroll-progress.js'
import SmoothScrollbar from 'vue-smooth-scrollbar'
import VueTyper from 'vue-typer'

Vue.use(Router)
Vue.use(Siema)
Vue.use(VueScrollProgress)
Vue.use(SmoothScrollbar)
Vue.use(VueTyper)
Vue.use(Vuelidate)

export default new Router({
  routes: [],
  validations: {},
  mode: 'history'
})
