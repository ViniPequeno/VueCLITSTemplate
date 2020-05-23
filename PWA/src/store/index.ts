import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    add: (state) => (state as any).counter++,
    menos: (state) => (state as any).counter--,
  },
  actions: {},
  modules: {},
  getters: {
    counter: (state) => (state as any).counter,
  },
});
