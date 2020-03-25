import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     },
//     {
//         path: '/about',
//         name: 'About',
//         component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//     },
//     {
//         path: '/login',
//         name: 'Login',
//         component: () => import(/* webpackChunkName: "login" */ '../views/Auth/Login.vue'),
//         meta: {
//             guest: true
//         }
//     },
//     {
//         path: '/register',
//         name: 'Register',
//         component: () => import(/* webpackChunkName: "register" */ '../views/Auth/Register.vue'),
//         meta: {
//             guest: true
//         }
//     },
//     {
//         path: '/dashboard',
//         name: 'Dashboard',
//         component: () => import(/* webpackChunkName: "dashboard" */ '../views/LoggedIn/Dashboard.vue'),
//         meta: {
//             requiresAuth: true
//         }
//     }
// ];

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
        meta: {
            guest: true
        }
    },
    {
        path: '/v1',
        component: () => import(/* webpackChunkName: "skeleton" */ '@/views/v1/Skeleton.vue'),
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "skeleton" */ '@/views/v1/Dashboard.vue')
            }
        ]
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: "notfound" */ '@/views/NotFound.vue')
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
