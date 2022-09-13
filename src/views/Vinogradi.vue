<template>

    <div class="bgc">
        <router-link to="/proizvodi" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat1">Proizvodi</div></router-link>
        <router-link to="/galerija" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat2a">Galerija</div></router-link>
        <router-link to="/vinogradi" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat2b">Vinogradi</div></router-link>
    </div>

    <div class="bgc2">
        <img class="slika" src="https://www.cimerfraj.hr/slike/zajednica/vinski-turizam-hrvatska-vinske-regije.jpg">
    </div>

    <div>
        <img class="img" src="@/assets/bottle.png">
    </div>

</template>

<script>
    import Dropdown from '@/components/Dropdown.vue';

export default({
    name: 'Vinogradi',
    components:{
        Dropdown
    },
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

    .img{
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0; 
        margin: auto;
        height: 80vh;
        margin-top: 15vh;
        left: 77%;
    }

    .slika{
        position: absolute;
        margin-top: -20vh;
        margin-left: -47vh;
        height: 75vh;
        align-content: center;
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
        width: 110vh;
        background-color: rgba(0, 0, 0, 30%);
        align-content: center;
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

    .cat2a{
        color: inherit;
        text-decoration: none;
        text-align: center;
        align-content: center;
        height: 10vh;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .cat2b{
        border-style: solid;
        border-left: none;
        border-right: none;
        border-color: black;
        background-color: #bb044b;
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

    .cat2a:hover{
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