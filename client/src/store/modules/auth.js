import axios from 'axios';
import setAuthToken from '@/utils/setAuthToken';

const state = {
    user: {}
};

const getters = {};

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
    }
};

const mutations = {
    setLogin: (state, user) => (state.user = user)
};

export default {
    state,
    getters,
    actions,
    mutations
};
