import Vue from 'vue';
import Vuex from 'vuex';
import amount from './modules/amount';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {amount}
});
