import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Siema from 'vue2-siema'
import VueScrollProgress from './scroll-progress.js'
import SmoothScrollbar from 'vue-smooth-scrollbar'
import VueTyper from 'vue-typer'

Vue.use(Router)
Vue.use(Siema)
Vue.use(VueScrollProgress)
Vue.use(SmoothScrollbar)
Vue.use(VueTyper)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [],
  mode: 'history'
})
