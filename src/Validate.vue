<template>
    <div>
        <input id="username" v-model="username">
        <input id="password" v-model="password">
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
                {{ error }}
            </ul>
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return{
            // error : 'fffffff',
            errors : ["error1","error2"],
            username:'',
            password:'',
        }
    },
    // methods:{
    //     checkForm: function (e) {
    //         if (this.username && this.password) { return true;}
    //         this.errors = [];
    //         if (!this.username) { this.errors.push('userNmae required.');}
    //         if (!this.password) { this.errors.push('password required.');}
    //         e.preventDefault();
    //     }
    // }
}
</script>