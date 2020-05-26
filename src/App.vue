<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <app-login></app-login>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './Login.vue';

export default {
  components : {
    'app-login' : Login
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>