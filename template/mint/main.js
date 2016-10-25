import Vue from 'vue'
import router from './router'
import App from './App.vue'
import 'normalize.css'

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})