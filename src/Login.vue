<template>
<div>
    <input type="text" id="username" v-model="message">
    <validate-input></validate-input>
    <p> {{message}} </p>
</div>
</template>
<script>
import Validate from './Validate.vue'
export default {
    data() {
        return{
            message : 'testststt'
        }
    },
    components : {
        'validate-input' : Validate
    },
}
</script>