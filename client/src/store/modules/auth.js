import axios from 'axios';
import setAuthToken from '@/utils/setAuthToken';

const state = {
    user: {}
};

const getters = {
    getUser: state => state.user
};

const actions = {
    async tryLogin({ commit }, data) {
        try {
            const res = await axios.post(process.env.VUE_APP_APIURL + '/api/auth', {
                email: data.email,
                password: data.password
            });

            setAuthToken(res.data.token);

            const getUser = await axios.get(process.env.VUE_APP_APIURL + '/api/auth');

            commit('setLogin', getUser.data);
        } catch (err) {
            setAuthToken();
            throw err.response;
        }
    },
    async tryAuth({ commit }) {
        try {
            if (localStorage.getItem('token') === null) {
                return;
            }

            setAuthToken(localStorage.getItem('token'));

            const res = await axios.get(process.env.VUE_APP_APIURL + '/api/auth');
            commit('setLogin', res.data);
        } catch (err) {
            this.trySignOut();
            throw err.response;
        }
    },
    async trySignOut({ commit }) {
        setAuthToken();
        commit('setSignOut');
    }
};

const mutations = {
    setLogin: (state, user) => {
        state.user = user;
        state.user.initials = user.firstName[0] + user.lastName[0];
    },
    setSignOut: state => (state.user = {})
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
