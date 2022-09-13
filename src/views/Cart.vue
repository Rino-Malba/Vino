<template>
  <div class="bgc2">
    <div class="txt1">NEMA PROIZVODA</div>
    <div class="txt2">U KOŠARICI</div>
  </div>
</template>

<script>


export default {
  name:'Cart',
  components:{
    
  }
}


</script>

<style scoped>

  .txt1{
    font-size: 14vh;
    font-weight: 700;
    color: #bb044b;
    -webkit-text-stroke: 2px black;
  }

  .txt2{
    font-size: 12vh;
    font-weight: 600;
    color: ivory;
    -webkit-text-stroke: 2px black;
  }
  
  .bgc2{
    padding-top: 25vh;
    text-align: center;
    position: absolute;
    margin-top: 9vh;
    margin-left: 5vh;
    margin-right: 5vh;
    height: 90vh;
    width: 183vh;
    background-color: rgba(0, 0, 0, 30%);
  }
</style>