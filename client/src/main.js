/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import LatteUI from "@bybas/latte-ui";
import "@bybas/latte-ui/src/scss/app.scss";
import "../src/views/style/main.scss";

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(LatteUI);

Vue.config.productionTip = false;

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
