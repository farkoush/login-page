<template>
<div>
    <h1>Login Page</h1>
        <!-- <h2>Your IP is {{ ip }}</h2> -->
        <input type="text" id="mobile" v-model="mobile" placeholder="mobile"  />
        <input type="text" id="pass" v-model="pass" placeholder="password" />
        <button class="submit" @click="postPost">Send</button>
</div>
</template>
<script>
import axios from 'axios';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export default {
  data() {
    return {
        mobile: "",
        pass: "",
        token: "1bc80d2340357fa446e7ed0873afdcf6d0b18d5626e09de14d214f56c4ced185",
        // token: "1bc80d2340357fa446e7ed0873afdcf6d0b18d5626e09de14d214f56c4ced185; XSRF-TOKEN=eyJpdiI6IllvdUc0cTA1NzdOOVU2eSsrOHdHcUE9PSIsInZhbHVlIjoiRCttaTlTa2NvVVwvb0pxQUVqcVA5YWlWV2p6RWxTNVFvNXc3M3hLUCtwbDhSd2VJRmZ2NzZLWkdcL2NqcDlRMjdMIiwibWFjIjoiOWI3NDNkYmY2OGJhNDRlZTRjYjZlNjZiNTgzZmVlMTczNzU1MTRhYzA4ZTRmMTJiODQxOGE5MmQ5MDU3OTVkYyJ9; laravel_session=eyJpdiI6Ilh0STd5bnZKN1hJdkxjajlGMGpkM0E9PSIsInZhbHVlIjoiUWdYZ1Nab1ZQWkVqeUFwQzJQS1A0WjBMaWZiUU5iR040XC80OXJ2MGxoRDhRcmlqUStaMnhMbWUwUFp3eGdTcE0iLCJtYWMiOiIxZWRhYTEzOWVhZWQ1ZTliNDkxZGRjYjk4ODAwMTg2OTUzMDIyYTM3NmM1NjdmZGMxNWE0YTg3Y2NlMzFmMTRkIn0%3D"
        errors: []   
    }
  },
    methods:{
        postPost() {
        // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
          // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`,
        axios.post(`http://hi.hooraweb.com/api/login`, this.data, {
            // headers: {
            //           Authorization: 'Bearer ' + this.token,
            //           // `Bearer ${token}`
            //         }
                }).then(res => {
                    console.log(res);
                }).catch(err => {
                    // console.log(err.response);
                });
        }
    },
    created() {
    // axios.get(`http://hi.hooraweb.com/api/login `)
    axios.get(`      http://hi.hooraweb.com/api/tasks/141 `)
    .then(response => {
      // JSON responses are automatically parsed.
      this.token = response.data
      console.log(this.token)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
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