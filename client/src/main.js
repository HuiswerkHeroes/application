/*
 * Copyright (c) 2020 
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import LatteUI from '@bybas/latte-ui';
import '@bybas/latte-ui/src/scss/app.scss';

Vue.use(LatteUI);

Vue.config.productionTip = false;

store.dispatch('auth/tryAuth').then(() => {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
});
