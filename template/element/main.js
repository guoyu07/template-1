import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})