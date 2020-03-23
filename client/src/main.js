import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import LatteUI from '@bybas/latte-ui';

Vue.use(LatteUI);

Vue.config.productionTip = false;

import '@bybas/latte-ui/src/scss/app.scss';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
