<template>
<div>
    <p>{{this.$route.params.teamId}}</p>
    <button @click="GoHome">Home</button>
</div>
</template>
<script>
export default {
    data() {
        return{
            
        }
    },
    watch: {
        // '$route'(to,from){
        //     alert(to.params.teamId);
        // }
    },
    created(){
        // alert(this.$route.params.teamId)
    },
    methods:{
        GoHome(){
            this.$router.push('/')
        }
    }
}
</script>