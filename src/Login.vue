<template>
<div>
    <input type="text" id="username" v-model="message">
    <validate-input></validate-input>
    <p> {{message}} </p>
</div>
</template>
<script>
import Login from './Username-validate.vue'
export default {
    data() {
        return{
            message : 'testststt'
        }
    },
components : {
    'validate-input' : Login
  },
}
</script>