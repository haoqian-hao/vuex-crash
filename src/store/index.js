import Vuex from 'vuex';
import Vue from 'vue';
import tasks from './modules/tasks';
import stock from './modules/stock';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    tasks,
    stock
  }
});