import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    // 1. La ruta raíz '/' ahora carga el Login
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/login.vue')
    },
    // 2. El menú de selección de grupos musculares se mueve a '/inicio'
    {
        path: '/inicio',
        name: 'Inicio',
        component: () => import('../views/index.vue')
    },
    // Las demás rutas siguen igual
    {
        path: '/espalda',
        name: 'Espalda',
        component: () => import('../views/espalda.vue')
    },
    {
        path: '/torso-frontal',
        name: 'TorsoFrontal',
        component: () => import('../views/torso_frontal.vue')
    },
    {
        path: '/piernas',
        name: 'Piernas',
        component: () => import('../views/piernas.vue')
    },
    {
        path: '/brazos',
        name: 'Brazos',
        component: () => import('../views/brazos.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router