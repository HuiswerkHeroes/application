/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import LatteUI from "@bybas/latte-ui";
import "@bybas/latte-ui/src/scss/app.scss";
import "../src/views/style/main.scss";
import axios from "axios";

Vue.use(LatteUI);

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

axios.interceptors.response.use(null, function (err) {
  if (axios.isCancel(err)) {
    return Promise.reject(err);
  }

  if (err.response.status === 401) {
    store.dispatch("auth/probeerUitloggen");
  }

  return Promise.reject(err);
});

store
  .dispatch("auth/probeerAuthenticeren")
  .then(() => {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  })
  .catch(() => {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  });
