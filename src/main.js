import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './Home.vue'
import Dashboard from './Dashboard.vue'
import Users from './Users.vue'
import Login from './Login.vue'



Vue.use(VueRouter);
const routes = [
  { path: '/', component: Home},
  { path: '/dashboard', component: Dashboard},
  { path: '/users/:teamId', component: Users},
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
