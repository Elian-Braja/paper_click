import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/HomePage.vue'
import User from '../components/UserProfile.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user_profile',
        name: 'User',
        component: User
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router