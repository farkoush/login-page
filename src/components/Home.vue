<template>
    <div class="home">
          <section class="hero is-dark">
            <div class="hero-body">
            <div class="container">
                <h1>Welcome VueLogin</h1>
                <button class="button is-xl is-dark" @click="goLogin">Login</button>
            </div>
            </div>
         </section>


    </div>
</template>
<script>
export default {
    name: 'home',
    components: {
    },
    methods: {
        goLogin(){
        this.$router.push('/login')
        }
    }
}
</script>

<style lang="" >
  .hero {  
    text-align: center;
    /* background-image: url('https://cdn.auth0.com/blog/vue-meetup/event-banner.png'); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }

  .button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  }

  .is-xl {
    font-size: 1.7rem;
  }
</style>