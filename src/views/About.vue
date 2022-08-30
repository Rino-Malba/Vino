<template>
    <div class="navbar">
      <Navbar/>
    </div>
    
    <div class="txt">
      <div class="tag">Informacija</div>
      <div class="info">Mi smo tvrtka koja služi za lakšu kupnju vina od raznih vinarija u Hrvatskoj.</div>
      <div><span class="txt1">Tel:</span><span class="txt3"> 052/579-268</span></div>
      <div><span class="txt1">Lokacija:</span><span class="txt3"> Novigrad</span></div>
      <div><span class="txt1">E-mail:</span><span class="txt3"> cellus.vinoprodaja@gmail.com</span></div>
      <div class="txt1">Partnerske Vinarije:</div>
      <div><img class="img2" src="@/assets/agrolaguna.png"></div>
      <div class="txt2">I MNOGE DRUGE:</div>
    </div>

    <div>
      <img class="img" src="@/assets/bottle.png">
    </div>

    <div class="bg">
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Bg from '../components/Bg.vue'

export default{
    name: 'About',
    components:{
    Navbar,
    Bg
}
}
</script>

<style scoped>

.img2{
  position: absolute;
  width: 50%;
  height: auto;
  margin-top: 30vh;
  margin-left: 0vh;
  filter: invert(1);
}

.txt{
  position: absolute;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.35);
  margin-top: 35vh;
  margin-left: 80vh;
  color: ivory;
  padding: 2vh;
  -webkit-font-stroke: 1px black;
}

.txt1{
  font-size: x-large;
  color: #bb044b;
  font-weight: 900;
  -webkit-text-stroke: 1px black;
}

.txt2{
  font-size: x-large;
  color: #bb044b;
  font-weight: 900;
  -webkit-text-stroke: 1px black;
  text-align: right;
}

.txt3{
  font-size: x-large;
  -webkit-text-stroke: 1.5px black;
  font-weight: 700;
}

.info{
  font-size: x-large;
  font-weight:bolder;
  -webkit-text-stroke: 1.5px black;
}

.tag{
  font-size: 5vh;
  font-family: 'Lobster';
  color: ivory;
  -webkit-text-stroke: 2px black;
}

img{
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0; 
  margin: auto;
  height: 80vh;
  margin-top: 15vh;
  margin-left: 20vh;
}

.navbar{
  position: fixed;
  z-index: 9;
}

.bg{
  position: fixed;
  max-width: 100%;
  margin-top: -8px;
}

</style>