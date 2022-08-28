import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Login from "@/views/Login.vue"

const routes = [
    {
        path: "/",
        name:"Home",
        component: Home
    },

    {
        path: "/login",
        name:"Login",
        component:() => import ('@/components/Login.vue')
    },

    {
        path: "/cart",
        name:"Cart",
        component:() => import('@/components/Cart.vue')
    },

    {
        path: "/about",
        name:"About",
        component:About
    },
];

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
});


export default router;