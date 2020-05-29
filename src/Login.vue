<template>
<div>
    <!-- <form>
        <validate-input></validate-input>
    </form> -->
    <h1>Login Page</h1>
    <div class="form">
        <input id="username" v-model="username">
        <input id="password" v-model="password">
        <button @click="validate">LOGIN</button>
    </div>
    <hr>
    <button @click="goHome">Home</button>
</div>
</template>
<script>
import Validate from './Validate.vue'
export default {
    components : {
        'validate-input' : Validate
    },
    methods: {
        goHome() {this.$router.push('/'); console.log(this)},
        validate(){

        }
    }
}
</script>