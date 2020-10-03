import VueRouter from 'vue-router';

import HomePage from "./pages/HomePage";

const routes = [
    {
        path: '/',
        component: HomePage,
    }
]

const router = new VueRouter({
    routes,
    mode: 'hash',
})

export default router;