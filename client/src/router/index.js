/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackMode: "lazy" */ '../views/Auth/Login.vue'),
        meta: {
            guest: true,
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackMode: "lazy" */ '../views/Auth/Register.vue'),
        meta: {
            guest: true,
        },
    },
    {
        path: '/v1',
        component: () => import(/* webpackMode: "lazy" */ '@/views/v1/Skeleton.vue'),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: 'register/setup/1',
                name: 'RegisterSetup1',
                component: () => import(/* webpackMode: "lazy" */ '../views/v1/register/setup/1.vue'),
                meta: {
                    isSetup: true,
                },
            },
            {
                path: 'register/setup/student/2',
                name: 'RegisterSetupStudent2',
                component: () => import(/* webpackMode: "lazy" */ '../views/v1/register/setup/student/2.vue'),
                meta: {
                    isSetup: true,
                },
            },
            {
                path: 'register/setup/student/3',
                name: 'RegisterSetupStudent3',
                component: () => import(/* webpackMode: "lazy" */ '../views/v1/register/setup/student/3.vue'),
                meta: {
                    isSetup: true,
                },
            },
            {
                path: '',
                name: 'Dashboard',
                component: () => import(/* webpackMode: "lazy" */ '@/views/v1/Dashboard.vue'),
            },
        ],
    },
    {
        path: '*',
        component: () => import(/* webpackMode: "lazy" */ '@/views/NotFound.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'is-not-really-active',
    linkExactActiveClass: 'is-active',
    routes,
});

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (localStorage.getItem('token') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath },
            });
        } else {
            let user = store.state.auth.user;
            if (user.setupComplete === false) {
                if (!to.matched.some((record) => record.meta.isSetup)) {
                    next({ name: 'RegisterSetup1' });
                } else {
                    next();
                }
            } else {
                if (to.matched.some((record) => record.meta.isSetup)) {
                    next({ name: 'Dashboard' });
                } else {
                    next();
                }
            }
        }
    } else if (to.matched.some((record) => record.meta.guest)) {
        if (localStorage.getItem('token') == null) {
            next();
        } else {
            next({ name: 'Dashboard' });
        }
    } else {
        next();
    }
});

export default router;
