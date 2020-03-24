import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Auth/Login.vue'),
        meta: {
            guest: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '../views/Auth/Register.vue'),
        meta: {
            guest: true
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/LoggedIn/Dashboard.vue'),
        meta: {
            requiresAuth: true
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            });
        } else {
            // let user = JSON.parse(localStorage.getItem('user'));
            // if (to.matched.some(record => record.meta.is_admin)) {
            //     if (user.is_admin == 1) {
            //         next();
            //     } else {
            //         next({ name: 'Dashboard' });
            //     }
            // } else {
            //     next();
            // }
            next();
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('jwt') == null) {
            next();
        } else {
            next({ name: 'Dashboard' });
        }
    } else {
        next();
    }
});

export default router;
