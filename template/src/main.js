import Vue from 'vue';
import Element from 'element-ui';
import 'normalize.css';
import 'element-ui/lib/theme-default/index.css';
import router from './router';
import App from './App.vue';

Vue.use(Element);

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App),
});

app();
