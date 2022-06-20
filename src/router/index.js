
//import Router from 'vue-router'
import Home from '@/views/Home'
import { createRouter, createWebHistory } from "vue-router"
import UsuarioDados from '@/views/Usuario/UsuarioDados'    

//Vue.use(Router)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'usuario',
        path: '/usuario',
        component: UsuarioDados  
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})

export default router;