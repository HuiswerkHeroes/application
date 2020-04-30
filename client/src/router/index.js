/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/inloggen",
  },
  {
    path: "/inloggen",
    name: "Inloggen",
    component: () =>
      import(/* webpackMode: "lazy" */ "../views/auth/Inloggen.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/registreren",
    name: "Registreren",
    component: () =>
      import(/* webpackMode: "lazy" */ "../views/auth/Registreren.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/v1",
    component: () =>
      import(/* webpackMode: "lazy" */ "../views/v1/Skeleton.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "registreren/setup/1",
        name: "RegistrerenSetup1",
        component: () =>
          import(
            /* webpackMode: "lazy" */ "../views/v1/registreren/setup/1.vue"
          ),
        meta: {
          isSetup: true,
        },
      },
      {
        path: "registreren/setup/student/2",
        name: "RegistrerenSetupStudent2",
        component: () =>
          import(
            /* webpackMode: "lazy" */ "../views/v1/registreren/setup/student/2.vue"
          ),
        meta: {
          isSetup: true,
        },
      },
      {
        path: "registreren/setup/student/3",
        name: "RegistrerenSetupStudent3",
        component: () =>
          import(
            /* webpackMode: "lazy" */ "../views/v1/registreren/setup/student/3.vue"
          ),
        meta: {
          isSetup: true,
        },
      },
      {
        path: "",
        name: "Dashboard",
        component: () =>
          import(/* webpackMode: "lazy" */ "../views/v1/Dashboard.vue"),
      },
      {
        path: "gebruiker/instellingen",
        component: () =>
          import(
            /* webpackMode: "lazy" */ "../views/v1/gebruiker/instellingen/InstellingenSkeleton.vue"
          ),
        children: [
          {
            path: "algemeen",
            name: "Instellingen",
            component: () =>
              import(
                /* webpackMode: "lazy" */ "../views/v1/gebruiker/instellingen/Algemeen.vue"
              ),
          },
          {
            path: "e-mailadres",
            name: "Instellingen-E-mailadres",
            component: () =>
              import(
                /* webpackMode: "lazy" */ "../views/v1/gebruiker/instellingen/E-mailadres.vue"
              ),
          },
          {
            path: "wachtwoord",
            name: "Instellingen-Wachtwoord",
            component: () =>
              import(
                /* webpackMode: "lazy" */ "../views/v1/gebruiker/instellingen/Wachtwoord.vue"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    component: () => import(/* webpackMode: "lazy" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "is-not-really-active",
  linkExactActiveClass: "is-active",
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("token") == null) {
      next({
        path: "/inloggen",
        params: { nextUrl: to.fullPath },
      });
    } else {
      const gebruiker = store.state.auth.gebruiker;
      if (gebruiker.setup_afgerond === false) {
        if (!to.matched.some((record) => record.meta.isSetup)) {
          next({ name: "RegistrerenSetup1" });
        } else {
          next();
        }
      } else {
        if (to.matched.some((record) => record.meta.isSetup)) {
          next({ name: "Dashboard" });
        } else {
          next();
        }
      }
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem("token") == null) {
      next();
    } else {
      next({ name: "Dashboard" });
    }
  } else {
    next();
  }
});

export default router;
