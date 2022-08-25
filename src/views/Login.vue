<template>
    <Navbar/>
    <Login/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Login from '@/components/Login.vue'

export default{
    name: 'Login',
    components:{
    Navbar,
    Login
}
}
</script>

<style scoped>

</style>