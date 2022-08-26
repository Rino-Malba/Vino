<template>
  <div class="navbar">
    <Navbar/>
  </div>
  <div>

  </div>
  <div class="bg">
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'About',
  components : {
    Navbar
}
}
</script>

<style lang="scss" scoped>

.navbar{
  position: fixed;
  z-index: 9;
}

.bg{
  position: fixed;
  max-width: 100%;
  margin-top: 0px;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
</style>
