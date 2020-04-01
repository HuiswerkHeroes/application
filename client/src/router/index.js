import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackMode: "lazy" */ '../views/auth/Login.vue'),
        meta: {
            guest: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackMode: "lazy" */ '../views/auth/Register.vue'),
        meta: {
            guest: true
        }
    },
    {
        path: '/v1',
        component: () => import(/* webpackMode: "lazy" */ '@/views/v1/Skeleton.vue'),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: () => import(/* webpackMode: "lazy" */ '@/views/v1/Dashboard.vue')
            }
        ]
    },
    {
        path: '*',
        component: () => import(/* webpackMode: "lazy" */ '@/views/NotFound.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'is-not-really-active',
    linkExactActiveClass: 'is-active',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.guest)) {
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
