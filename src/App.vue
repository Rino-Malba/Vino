<template>
<div class="navbar">
  <Navbar/>
    <div id="app">
    <router-view/>
    </div>
  </div>
  <div class="bg">
    <Bg/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Bg from './components/Bg.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Bg,
}
}
</script>



<style lang="scss">
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
