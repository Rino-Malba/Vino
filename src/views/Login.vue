<template>
    <div class="navbar">
        <Navbar/>
    </div>
    
    <div class="log">
        <Login/>
    </div>

    <div class="bg">
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Login from '../components/Login.vue'

export default{
    name: 'Login',
    components:{
        Navbar,
        Login
    }
}
</script>

<style scoped>

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