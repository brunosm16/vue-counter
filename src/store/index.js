import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  state: {
    counter: 0,
  },

  mutations: {
    increase: (state) => {
      state.counter += 1;
    },

    decrease: (state) => {
      state.counter -= 1;
    },

    actions: {
      increase({ commit }) {
        commit('increase');
      },

      decrease({ commit }) {
        commit('decrease');
      },
    },
  },
};
