<template>

    <div class="bgc">
        <router-link to="/proizvodi" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat1">Proizvodi</div></router-link>
        <router-link to="/galerija" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat1">Galerija</div></router-link>
        <router-link to="/vinogradi" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat1">Vinogradi</div></router-link>
    </div>

    <div class="bgc2">
        <div class="txt1">ODABERI</div>
        <div class="txt2">PROIZVOD</div>
    </div>

</template>

<script>
export default({
    data(){
       return{
        services:[
            {
            title: 'Malvazija',
            link: '@/views/Malvazija.vue'
            },
            {
            title: 'Merlot',
            link: '@/views/Merlot.vue'
            }
        ]
       } 
    }
});

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
        font-size: 10vh;
        position: absolute;
        margin-top: 9vh;
        margin-left: 40vh;
        margin-right: 5vh;
        height: 85vh;
        width: 152vh;
        background-color: rgba(0, 0, 0, 30%);
    }

    .cat1:link{
        text-decoration: none;
    }

    .cat1{
        color: inherit;
        text-decoration: none;
        text-align: center;
        align-content: center;
        height: 10vh;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .cat1:hover{
        border-style: solid;
        border-left: none;
        border-right: none;
        border-color: black;
        background-color: #bb044b;
    }

    
    .bgc{
        text-decoration: none;
        border-style: solid;
        border-color: black;
        border-width: 5px;
        margin-top: 9vh;
        margin-left: 5vh;
        width: 30vh;
        font-family: "Lobster";
        position: absolute;
        line-height: 9vh;
        font-size: 5vh;
        font-weight: bold;
        color: ivory;
        -webkit-text-stroke: 1px black;
        background-color: rgba(0, 0, 0, 30%);
    }
</style>