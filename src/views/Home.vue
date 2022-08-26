<template>
    <div class="navbar">
        <Navbar/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components : {
    Navbar
}
}
</script>

<style scoped>

.navbar{
  position: fixed;
  z-index: 9;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }

</style>
