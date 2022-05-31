import Main from "../pages/Main.vue"
import Login from "../pages/Login.vue"
import Profile from "../pages/Profile.vue"
import Tickets from "../pages/Tickets.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/ticket',
        component: Tickets
    }
]

const router = createRouter({
    routes, 
    history: createWebHistory(process.env.BASE_URL)
})

export default router;