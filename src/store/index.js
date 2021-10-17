import Vuex from 'vuex';
import Vue from 'vue';
import tasks from './modules/tasks';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    tasks
  }
});