import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Home from "@/pages/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import BlogDetails from "@/pages/BlogDetails.vue";
import Category from "@/pages/Category.vue";
import Categories from "@/pages/Categories.vue";

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/categories', component: Categories, name: 'categories' },
    { path: '/category/name', component: Category, name: 'category' },
    { path: '/blog/abc', component: BlogDetails, name: 'blog-details' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
