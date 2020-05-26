<template>
    <div>
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <!-- <li v-for="error in errors">{{ error }}</li> -->
                {{ error }}
            </ul>
        </p>
        <input id="username" v-model="username" v-on:click:enter="checkForm">
        <input id="password" v-model="password">
    </div>
</template>
<script>
export default {
    data() {
        return{
            error : 'fffffff',
            // errors : ["gggg","gggggggg"],
            username:null,
            password:null,
        }
    },
    methods:{
        checkForm: function (e) {
            if (this.username && this.password) { return true;}
            this.errors = [];
            if (!this.username) { this.errors.push('userNmae required.');}
            if (!this.password) { this.errors.push('password required.');}
            e.preventDefault();
        }
    }
}
</script>