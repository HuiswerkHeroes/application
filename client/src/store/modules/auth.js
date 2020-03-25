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
            throw err.response;
        }
    },
    async tryAuth({ commit }) {
        try {
            // console.log(localStorage.getItem('token'));
            if (localStorage.getItem('token') === null) {
                return;
            }

            setAuthToken(localStorage.getItem('token'));

            const res = await axios.get(process.env.VUE_APP_APIURL + '/api/auth');
            commit('setLogin', res.data);
        } catch (err) {
            setAuthToken();
            throw err.response;
        }
    }
};

const mutations = {
    setLogin: (state, user) => (state.user = user)
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
