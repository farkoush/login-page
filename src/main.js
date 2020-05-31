import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import VueResource from 'vue-resource';
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
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
