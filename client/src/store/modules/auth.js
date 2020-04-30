/*
 * Copyright (c) 2020
 * Dit project is gemaakt door Tygo Egmond (tygoegmond.nl)
 */

import axios from "axios";
import router from "../../router";
import setAuthToken from "@/utils/setAuthToken";

const state = {
  gebruiker: {},
};

const getters = {
  getGebruiker: (state) => state.gebruiker,
};

const actions = {
  async probeerInloggen({ commit }, data) {
    const res = await axios
      .post(process.env.VUE_APP_APIURL + "/api/v1/auth/inloggen", {
        email: data.email,
        wachtwoord: data.wachtwoord,
      })
      .catch((err) => {
        throw err;
      });

    setAuthToken(res.data.token);

    const getUser = await axios.get(
      process.env.VUE_APP_APIURL + "/api/v1/gebruiker"
    );

    commit("setInloggen", getUser.data.gebruiker);
  },
  async probeerRegistreren({ commit }, data) {
    const { voornaam, achternaam, email, wachtwoord } = data;

    const res = await axios
      .post(process.env.VUE_APP_APIURL + "/api/v1/auth/registreren", {
        voornaam,
        achternaam,
        email,
        wachtwoord,
      })
      .catch((err) => {
        throw err;
      });

    setAuthToken(res.data.token);

    const getUser = await axios
      .get(process.env.VUE_APP_APIURL + "/api/v1/gebruiker")
      .catch((err) => {
        throw err;
      });

    commit("setInloggen", getUser.data.gebruiker);
  },
  async probeerAuthenticeren({ commit, dispatch }) {
    try {
      if (localStorage.getItem("token") === null) {
        return;
      }

      setAuthToken(localStorage.getItem("token"));

      const res = await axios.get(
        process.env.VUE_APP_APIURL + "/api/v1/gebruiker"
      );

      commit("setInloggen", res.data.gebruiker);
    } catch (err) {
      dispatch("probeerUitloggen");
      throw err;
    }
  },
  async probeerUitloggen({ commit }) {
    setAuthToken();
    await router.push({ path: "/" });
    commit("setUitloggen");
  },
};

const mutations = {
  setInloggen: (state, gebruiker) => {
    state.gebruiker = gebruiker;
    state.gebruiker.initialen = gebruiker.voornaam[0] + gebruiker.achternaam[0];
  },
  setUitloggen: (state) => (state.gebruiker = {}),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
