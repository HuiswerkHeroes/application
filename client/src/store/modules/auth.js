/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

import axios from 'axios';
import setAuthToken from '@/utils/setAuthToken';

const state = {
    gebruiker: {},
};

const getters = {
    getGebruiker: (state) => state.gebruiker,
};

const actions = {
    async tryLogin({ commit, dispatch }, data) {
        try {
            const res = await axios.post(process.env.VUE_APP_APIURL + '/api/auth', {
                email: data.email,
                wachtwoord: data.wachtwoord,
            });

            setAuthToken(res.data.token);

            const getUser = await axios.get(process.env.VUE_APP_APIURL + '/api/auth');

            commit('setLogin', getUser.data);
        } catch (err) {
            dispatch('trySignOut');
            throw err;
        }
    },
    async tryRegister({ commit, dispatch }, data) {
        const { firstName, lastName, email, password } = data;
        const voornaam = firstName;
        const achternaam = lastName;
        const wachtwoord = password;

        try {
            const res = await axios.post(process.env.VUE_APP_APIURL + '/api/gebruiker', {
                voornaam,
                achternaam,
                email,
                wachtwoord,
            });

            setAuthToken(res.data.token);

            const getUser = await axios.get(process.env.VUE_APP_APIURL + '/api/auth');

            commit('setLogin', getUser.data);
        } catch (err) {
            dispatch('trySignOut');
            throw err;
        }
    },
    async tryAuth({ commit, dispatch }) {
        try {
            if (localStorage.getItem('token') === null) {
                return;
            }

            setAuthToken(localStorage.getItem('token'));

            const res = await axios.get(process.env.VUE_APP_APIURL + '/api/auth');
            commit('setLogin', res.data);
        } catch (err) {
            dispatch('trySignOut');
            throw err;
        }
    },
    async trySignOut({ commit }) {
        setAuthToken();
        commit('setSignOut');
    },
};

const mutations = {
    setLogin: (state, gebruiker) => {
        state.gebruiker = gebruiker;
        state.gebruiker.initialen = gebruiker.voornaam[0] + gebruiker.achternaam[0];
    },
    setSignOut: (state) => (state.user = {}),
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
