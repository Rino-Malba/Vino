<template>
    <div class="navbar">
        <Navbar/>
    </div>
    
    <div class="log">
        <Login/>
    </div>

    <div class="bg">
        <Bg/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Bg from '../components/Bg.vue'
import Login from '../components/Login.vue'
export default{
    name: 'Login',
    components:{
        Navbar,
        Login,
        Bg
    }
}
</script>
    
    <style scoped>
    
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

<style scoped>

.log{
    z-index: 8;
}

.navbar{
  position: fixed;
  z-index: 9;
}

.bg{
  position: fixed;
  max-width: 100%;
  margin-top: 0px;
}

</style>