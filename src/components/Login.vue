<template>
<div>
    <!-- <form>
        <validate-input></validate-input>
    </form> -->
    <h1>Login Page</h1>
        <!-- <h2>Your IP is {{ ip }}</h2> -->
        <input type="text" id="mobile" v-model="input.mobile" placeholder="mobile"  />
        <input type="text" id="password" v-model="input.password" placeholder="password" />
        <button class="submit" @click="sendData">Send</button>
        <br />
        <br />
        <textarea>{{ response }}</textarea>
    <hr>
    <button class="button" @click="goHome">Home</button>
</div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            token: "1bc80d2340357fa446e7ed0873afdcf6d0b18d5626e09de14d214f56c4ced185; XSRF-TOKEN=eyJpdiI6Im5WNjBCNDFwZzYzd0ZOVFNJSGozWFE9PSIsInZhbHVlIjoiN1RaRjhuREZkVnl6NkhPZ1l4dXNoTFpjNFwvXC9oYVhLcU9kajI4RHVwaFY2R2YwWU5RQXdMSE5Qamd3TFVxb0V1IiwibWFjIjoiMDc0YmFmZWU5ZGM0ZjBmZTQ5YWI0Yjk4YmM2MjgxZjRlY2UwN2I0Y2U1YTZmYTZkNjBkNTM5OTE2YmJmMzlmNCJ9; laravel_session=eyJpdiI6Im5BM05mdU5BbnJsYjVZWHdoXC9OdmNBPT0iLCJ2YWx1ZSI6IjZVZHc4Qk1HdktnT1N1SVczUE5aRzlBKzNOY3FnRTVrVDBFS0lqUW5Fak8zZjcxZXZqbkdLU1lpVEtON1JPbVkiLCJtYWMiOiJlMGEzNTc5M2I5YzNiNGQ1ZDQ0YjEyYmViNmY2MjY0NmU0YjNhY2RhOGYzZGRiMTU0MGZkNTRhODgzMzllZTA4In0%3D",
            input: {
                mobile: "",
                password: ""
            },
            response: ""
        }
    },
    mounted() { 
        var api_url = "http://5.253.24.182:80/api/tasks/74"
        // this.$http.get("https://httpbin.org/ip").then(result => {
            this.$http.headers.common['Access-Control-Allow-Origin'] = 'http://5.253.24.182:80';
            // console.log('mobile:'+this.input.mobile)
            this.$http.headers.common['Authorization'] = 'Bearer ' + btoa('09191259028' + ':' + '123456');

            // this.$http.get('http://'+ camera.ip + ':' + camera.port +'/cgi-bin/image.jpg')
            this.$http.get(api_url).then(result => {
                }, error => {
                    console.error(error);
                });
    },
    methods: { 
        goHome() {this.$router.push('/'); console.log(this)},
        sendData() {
            this.$http.post("http://hi.hooraweb.com/api/tasks/74", this.input, { headers: { "content-type": "application/json" } }).then(result => {
                    this.response = result.data;

            }, error => {
                console.error(error);
            });
        }
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