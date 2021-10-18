import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import Home from './views/Home'
import About from './views/About'

Vue.use(VueRouter); 

const routes = [
  {path: '/', component:Home}, 
  {path: '/about', component: About}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
