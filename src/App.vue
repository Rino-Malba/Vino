<template>
  <Navbar/>
  <div id="app">
    <router-view/>
    <SignUp/>
  </div>
</template>

<script>
import SignUp from './components/SignUp.vue'
import Navigation from './components/Navigation.vue';
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components : {
    SignUp,
    Navigation,
    Navbar
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
