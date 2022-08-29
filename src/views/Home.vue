<template>
  <div class="res">
  <div class="msg">
  <h2>WINE</h2>
  <p>IS A TEACHER OF TASTE,
    LIBERATOR OF THE SOUL 
    AND LIGHT OF INTELIGENCE</p>
  </div>
  <div>
    <img class="img" src="@/assets/bottle.png">
  </div>
  <div class="menu">
    <router-link to="/menu" class="menulink">Kupnja</router-link>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components : {
}
}
</script>

<style scoped>

.menu{
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  margin: auto;
  margin-top: 85vh;
  margin-left: 165vh;
  margin-right: 20vh;
  background-color: rgba(0, 0, 0, 1);
  z-index: 10;
}

.menulink{
  color: ivory;
  font-size: 50px;
  font-family: "Lobster";
  -webkit-text-stroke: 2px black;
  text-decoration: none;
}

.menulink:hover{
  color: #bb044b;
}

img{
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0; 
  margin: auto;
  height: 80vh;
  margin-top: 15vh;
  margin-left: 20vh;
}

.res{
  max-width: 500px;
}

.msg{
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0; 
  margin: auto;
  margin-left: 80vh;
  margin-right: 20vh;
  line-height: 6vh;
  margin-top: 35vh;
  width: 85vh;
  text-align: center;
}

h2{
  font-size: 15vh;
  font-weight: bolder;
  color: #bb044b;
}

p{
  font-size: 6vh;
  font-weight: bolder;
  -webkit-text-stroke: 2px black;
  color: ivory;
}
</style>
