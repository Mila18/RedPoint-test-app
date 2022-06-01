import Main from "../pages/Main.vue"
import Login from "../pages/Login.vue"
import Profile from "../pages/Profile.vue"
import Tickets from "../pages/Tickets.vue"
import { createRouter, createWebHistory } from "vue-router"


const routes = [
    {
        path: '/',
        component: Main,
        meta: {
            needsAuth:true
        }
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            needsAuth:true
        }
    },
    {
        path: '/ticket',
        component: Tickets,
        meta: {
            needsAuth:true
        }
    },
]

const router = createRouter({
    routes, 
    history: createWebHistory(process.env.BASE_URL)
});

router.beforeEach((to, from, next) => {
    
    if(to.meta.needsAuth){
        let isUserAuth = localStorage.getItem('isAuth');
        if(isUserAuth)
        {
            next(); 
        } else{
            next('/login');
        }
    } else{
        next();
    }
});


export default router;