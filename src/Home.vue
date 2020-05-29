<template>
    <div>
        <h1>Welcome VueLogin</h1>
        <button @click="goLogin">Login</button>
    </div>
</template>
<script>
export default {
    data() {
        return{
            
        }
    },
    methods: {
        goLogin(){
        this.$router.push('/login')
        }
    }
}
</script>