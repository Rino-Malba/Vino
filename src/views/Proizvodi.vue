<template>

    <div class="bgc">
        <router-link to="/proizvodi" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat1">Proizvodi</div></router-link>
        <router-link to="/galerija" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat2a">Galerija</div></router-link>
        <router-link to="/vinogradi" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat2b">Vinogradi</div></router-link>
    </div>
    <Proizvod/>
    <div class="bgc2">
    </div>
    <div class="shop">
        <div class="name">
            Lista proizvoda
        </div>
        <div v-for="wine in wines" :key="wine">
            <div class="title">
                <div class="winename">
                {{wine.name}} 
                </div>
                    <br>
                <div class="slike">
                    <img class="slika" :src="wine.img">
                </div>
                    <br>
                <div class="price">
                {{wine.price}}
                </div>
            </div>
            <!--
            <div class="cart">
                <button
                    @click="updateCart(product, 'subtract')"
                    class="cart__button"
                >
                -
                </button>
                <span class="cart__quantity">{{ product.quantity }}</span>
                <button
                    @click="updateCart(product, 'add')"
                    class="cart__button"
                >
                +
                </button>
                </div> -->
            </div>
        </div>
        
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';

export default({
    components:{
        Dropdown,
    },
    data:() => {
        return{
            wines: [
            {
                id: 1,
                name: 'Malvazija Agrolaguna',
                img: 'https://www.vrutak.hr/content/images/thumbs/0019549_malvazija-istarska-agrolaguna-1l-kv-suho-2020-61-.jpeg',
                description: 'This is an incredibly awesome product',
                price: "35,98 kn",
                quantity: 0,
            },
            {
                id: 2,
                name: 'Malvazija Fakin',
                img: 'https://www.vrutak.hr/content/images/thumbs/0018176_malvazija-fakin-075l-vrh-suho-2020-61-.jpeg',
                description: 'This is an incredibly awesome product',
                price: "67,50 kn",
                quantity: 0,
            },
            {
                id: 3,
                name: 'Malvazija Kabola',
                img: 'https://www.vrutak.hr/content/images/thumbs/0026732_malvazija-kabola-markezic-075l-vrh-suho-2021-121-.jpeg',
                description: 'This is an incredibly awesome product',
                price: "72,98 kn",
                quantity: 0,
            },
            {
                id: 4,
                name: 'Malvazija Radovan',
                img: 'https://www.vrutak.hr/content/images/thumbs/0017986_malvazija-radovan-istarska-075l-suho-2020-61-.jpeg',
                description: 'This is an incredibly awesome product',
                price: "79,98 kn",
                quantity: 0,
            },
            {
                id: 5,
                name: 'Malvazija Tomaz Nera',
                img: 'https://www.vrutak.hr/content/images/thumbs/0022984_malvazija-nera-tomaz-075l-vrh-suho-2017-61-.jpeg',
                description: 'This is an incredibly awesome product',
                price: "174,98 kn",
                quantity: 0,
            },
            {
                id: 6,
                name: 'Malvazija Aura M.',
                img: 'https://www.vrutak.hr/content/images/thumbs/0018018_aura-matosevic-chsamalv-075l-kvsuho-2020-121-.jpeg',
                description: 'This is an incredibly awesome product',
                price: "75,98 kn",
                quantity: 0,
            },
            {
                id: 7,
                name: 'Bogondon Merlot',
                img: 'https://www.vrutak.hr/content/images/thumbs/0020847_bogondon-brac-stina-075l-zoi-suho-2019.jpeg',
                description: 'This is an incredibly awesome product',
                price: "63,98 kn",
                quantity: 0,
            },
            {
                id: 8,
                name: 'Merlot Festigia Castello',
                img: 'https://www.vrutak.hr/content/images/thumbs/0017907_n-castello-laguna-festigia-075l-vrh-suho-2017-61-.jpeg',
                description: 'This is an incredibly awesome product',
                price: "84,98 kn",
                quantity: 0,
            },
            {
                id: 9,
                name: 'Cuvee Tre Regine',
                img: 'https://www.vrutak.hr/content/images/thumbs/0025581_cuvee-tre-regine-cattunar-075l-kv-suho-2007.jpeg',
                description: 'This is an incredibly awesome product',
                price: "169,98 kn",
                quantity: 0,
            },
            {
                id: 10,
                name: 'Cuvee Kotar Merlot',
                img: 'https://www.vrutak.hr/content/images/thumbs/0017653_cuvee-masvin-kotar-superior-075l-kv-suho-2017-61-.jpeg',
                description: 'This is an incredibly awesome product',
                price: "79,98 kn",
                quantity: 0,
            },
            {
                id: 11,
                name: 'Boškinac Merlot',
                img: 'https://www.vrutak.hr/content/images/thumbs/0017715_boskinac-cabsauvimerlot075l-vrh-suho-2016-61-.jpeg',
                description: 'This is an incredibly awesome product',
                price: "275,98 kn",
                quantity: 0,
            },
            {
                id: 12,
                name: 'Merlot Franc Arman',
                img: 'https://www.vrutak.hr/content/images/thumbs/0025146_cabernet-franc-arman-m-075l-kv-suho-2017-121-.jpeg',
                description: 'This is an incredibly awesome product',
                price: "81,98 kn",
                quantity: 0,
            },
            ],
            
            images:[
            
            { 
                url: require('../assets/vina/malv1.jpeg')
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
            ],
            products: [
                {
                    id: 1,
                    name: 'Product 1',
                    description: 'This is an incredibly awesome product',
                    quantity: 0,
                },
                {
                    id: 2,
                    name: 'Product 2',
                    description: 'This is an incredibly awesome product',
                    quantity: 0,
                },
                {
                    id: 3,
                    name: 'Product 3',
                    description: 'This is an incredibly awesome product',
                    quantity: 0,
                }
            ],
        }
    }
});

</script>

<style scoped>

    .price{
        color: ivory;
        font-size: 2.25vh;
        font-weight: bolder;
        -webkit-text-stroke: black 0.5px;
        background-color: #5f993b;
        text-align: center;
    }

    .price:hover{
        background-color: #bb044b;
        cursor: pointer;
    }

    .winename{
        font-size: x-large;
        font-weight: 700;
        color: ivory;
        -webkit-text-stroke: black 1.5px;
        margin-bottom: 1vh;
        text-align: center;
        margin-left: 2vh;
    }


    .name{
        color: ivory;
        font-size: 5vh;
        font-weight: 500;
        font-family: 'Lobster';
        -webkit-text-stroke: black 2px;
    }

    .name:hover{
        color: #bb044b;
    }

    .title{
        margin-top: 2vh;
        float: left;
        text-align: center;
        align-content: center;
        margin-left: 1vh;
        justify-content: center;
    }

    .slike{
        margin-left: 5vh;
        margin-right: 5vh;
    }

    .slika{
        height: 20vh;
        max-width: 20vh;

    }

    .shop{
        padding-top: 25vh;
        text-align: center;
        position: absolute;
        margin-top: -15vh;
        margin-left: 40vh;
        margin-right: 5vh;
        height: 85vh;
        width: 152vh;
    }

    .bgc2{
        padding-top: 25vh;
        text-align: center;
        position: absolute;
        margin-top: 9vh;
        margin-left: 40vh;
        margin-right: 5vh;
        height: 90vh;
        width: 152vh;
        background-color: rgba(0, 0, 0, 30%);
    }

    .cat1:link{
        text-decoration: none;
    }

    .cat1{
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
        color: inherit;
        text-decoration: none;
        text-align: center;
        align-content: center;
        height: 10vh;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .cat2a:hover{
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