<template>
<div class="text">
<h1 class="h1">Log in</h1>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter Name"/>
    <input type="text" v-model="email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button id="login" v-on:click="logIn">Log in</button>
</div>
</div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'Login',
    data()
    {
        return{
            name: '',
            email: '',
            password: ''
        }
    },
    methods:{
        async logIn()
        {
            let result = await axios.post("https://localhost:3000/users", {
                name:this.name,
                email:this.email,
                password:this.password
            });

            console.warn(result);
            if (result.status==201)
            {
                alert("sign-up done");
                localStorage.setItem("user-info",JSON.stringify(result.data))
            }
        }
    }
}

</script>

<style>

@font-face {
    font-family: 'SansitaWashed';
    src: url(@/assets/fonts/SansitaSwashed-BlackItalic.ttf);
}

.text{
    margin: 100px;
    position: relative;
}

h1{
    font-family: "SansitaWashed";
    color: #bb044b;
    -webkit-text-stroke: 1px black;
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