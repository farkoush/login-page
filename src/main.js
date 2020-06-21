import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import VueResource from 'vue-resource';
// import store from './store';
import Vuex from 'vuex'

// import Router from './router'
import Home from './components/Home.vue'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'

Vue.config.productionTip = false
Vue.use(VueResource);

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Home},
  { path: '/dashboard', component: Dashboard},
  // { path: '/users/:teamId', component: Users},
  { path: '/login', component: Login},
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: "1bc80d2340357fa446e7ed0873afdcf6d0b18d5626e09de14d214f56c4ced185",
  },
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
