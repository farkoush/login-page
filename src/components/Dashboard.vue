<template>
  <div class="about">
          <h1 class="title ">Dashboard</h1>
          <div v-if="$store.state.token">
            <h3  v-for="task in tasks" :key="task.id">
              {{ task.title }}
            </h3>
            <!-- <p>{{tasks[0].title}}</p> -->
          </div>
          <div v-else>please login</div>
          <!-- <p>your token is {{$store.state.token}}</p> -->
  </div>
</template>
<script>
  import axios from 'axios';
 export default {
   data(){
     return{
       tasks: []
     }
   },
    computed:{
      // tasks(){
      //   return [1,2,3]
      // }
    },
    created(){
      if (this.$store.state.token) {
        axios.get('http://hi.hooraweb.com/api/tasks', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$store.state.token,
          }
        }).then(res => {
          console.log(res)
          this.tasks = res.data.data
        })
      }
    }

}
</script>

