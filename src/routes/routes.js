import { createRouter, createWebHashHistory } from 'vue-router'

// Importamos las vistas directamente según tu estructura
const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: () => import('../views/index.vue')
    },
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

// Cambiamos createWebHistory() por createWebHashHistory()
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router