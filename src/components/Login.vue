<template>
<div class="text">
<h1 class="h1">Log in</h1>
<div class="register">
    <input type="text" v-model="email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button id="login" v-on:click="logIn">Log in</button>
</div>
</div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'loginc',
    data()
    {
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        async logIn()
        {
            let result = await axios.get('https://localhost:3000/users?=${this.email}&password=${this.password}')

            if(result.status==200 && result.data.lenght>0){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'Home'})
            }

            console.warn(result)
            
            
        }
    }
}

axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (!error.response) {
            console.log("Please check your internet connection.");
        }

        return Promise.reject(error)
    }
)

</script>

<style>

@font-face {
    font-family: 'SansitaWashed';
    src: url(@/assets/fonts/SansitaSwashed-BlackItalic.ttf);
}

.text{
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0; 
    margin: auto;
    margin-top: 30vh;
    z-index: 8;
}

h1{
    font-family: "SansitaWashed";
    color: #bb044b;
    -webkit-text-stroke: 2px black;
    text-align: center;
}

.register{
    margin-top: 30px;
    text-align: center;
}

.register input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid seagreen;
}
.register button{
  width: 320px;
  height: 40px;
  border: 0px;
  background: seagreen;
  color: white;
  cursor: pointer;
  }

.register button:hover{
    background: #bb044b;
}

.register input:focus{
    outline: none;
}

</style>