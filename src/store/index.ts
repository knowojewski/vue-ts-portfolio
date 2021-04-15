import Vue from "vue";
import Vuex, { Module } from "vuex";
import ui from "./modules/ui";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui,
  },
});
