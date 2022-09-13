import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue"
import Cart from "@/views/Cart.vue"
import Menu from "@/views/Menu.vue"
import Proizvodi from "@/views/Proizvodi.vue"



const routes = [
    {
        path: "/",
        name:"Home",
        component: Home
    },

    {
        path: "/login",
        name:"Login",
        component:() => import("@/components/Login.vue")
    },

    {
        path: "/cart",
        name:"Cart",
        component:Cart
    },

    {
        path: "/about",
        name:"About",
        component:() => import("@/views/About.vue")
    },

    {
        path: "/menu",
        name:"Menu",
        component:Menu
    },

    {
        path: '/proizvodi',
        name:"Proizvodi",
        component:Proizvodi
    },

    {
        path: '/galerija',
        name:"Galerija",
        component:() => import('@/views/Galerija.vue')
    },

    {
        path: '/vinogradi',
        name:"Vinogradi",
        component:() => import('@/views/Vinogradi.vue')
    },

];

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
});


export default router;