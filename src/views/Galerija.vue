<template>
    
    <div class="bgc">
        <router-link to="/proizvodi" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat1">Proizvodi</div></router-link>
        <router-link to="/galerija" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat2a">Galerija</div></router-link>
        <router-link to="/vinogradi" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat2b">Vinogradi</div></router-link>
    </div>

    <div class="bgc2">
        <div id="vue-slider">
            <div class="pictures">
                <img class="slika" v-for="slika in slike" :src="slika.url" :alt="slika.alt" :key="slika" onclick="window.open(this.src)">
            </div>
        </div>
    </div>


</template>

<script>
import Dropdown from '@/components/Dropdown.vue'

export default{
    name:'Galerija',
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
        ],
        slike: [
            { 
                url: require('../assets/vina/malv1.jpeg'),
                label: "Vino1"
            },
            { 
                url: require('../assets/vina/malv2.jpeg')
            },
            { 
                url: require('../assets/vina/malv3.jpeg')
            },
            { 
                url: require('../assets/vina/malv4.jpeg')
            },
            { 
                url: require('../assets/vina/malv5.jpeg')
            },
            { 
                url: require('../assets/vina/malv6.jpeg')
            },
            { 
                url: require('../assets/vina/mer1.jpeg')
            },
            { 
                url: require('../assets/vina/mer2.jpeg')
            },
            { 
                url: require('../assets/vina/mer3.jpeg')
            },
            { 
                url: require('../assets/vina/mer4.jpeg')
            },
            { 
                url: require('../assets/vina/mer5.jpeg')
            },
            { 
                url: require('../assets/vina/mer6.jpeg')
            },
        ]
       } 
    }
};


</script>

<style scoped>


    .pictures{
        position: absolute;
        margin-top: -23vh;
    }

    .slika{
        height: 30vh;
        margin: 5vh;
    }

    .slika:hover{
        height: 35vh;
        cursor: pointer;
        margin: auto;
        align-content: center;
        transition: 0.5s ease;
        
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

    .cat2a{
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

    .cat2b{
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

    .cat2b:hover{
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