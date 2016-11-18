import Vue from 'vue';
import MintUI from 'mint-ui';
import fastclick from 'fastclick';
import 'mint-ui/lib/style.css';
import App from './App';
import router from './router';

Vue.use(MintUI);

fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
