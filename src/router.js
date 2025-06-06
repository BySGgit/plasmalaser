import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import ProductsPage from './views/ProductsPage.vue'
import AboutPage from './views/AboutPage.vue'
import ContactPage from './views/ContactPage.vue'


const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/products', name: 'Products', component: ProductsPage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/contact', name: 'Contact', component: ContactPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router