<template>
    <div class="home">
        <img alt="logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome"/>
    </div>
    <Navigation/>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Navigation from '@/components/Navigation.vue';

export default{
    name: 'Home',
    components:{
    HelloWorld,
    Navigation
}
}
</script>

<style scoped>

</style>
