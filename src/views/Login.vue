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