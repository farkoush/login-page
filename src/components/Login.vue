<template>
<div>
    <h1>Login Page</h1>
        <input type="text" id="mobile" v-model="$store.state.inputs.mobile" placeholder="mobile"  />
        <input type="text" id="pass" v-model="$store.state.inputs.pass" placeholder="password" />
        <button class="submit" @click="postPost">Send</button>
</div>
</template>
<script>
import axios from 'axios';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + this.token,
//     // `Bearer ${token}`
//   }
export default {
    methods:{
      postPost() {
          axios
            .post(`http://hi.hooraweb.com/api/login`, this.$store.state.inputs)
            .then(res => {
                if (res.status === 200) {
                  this.$store.state.token = res.data.token
                  this.$router.push('dashboard')
                }
                else {
                    // throw error and go to catch block
                    throw new Error("Error Status");
                }
            })
            .catch(err => console.log(err));
        },
    },
}
</script>
<style scoped>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button.submit {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.submit:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
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
  textarea{width: 100%;}
</style>
