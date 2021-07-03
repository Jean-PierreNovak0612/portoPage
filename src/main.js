import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router'

import App from './App.vue';
import Header from './components/Header.vue';

const routes = [
    { path: '/', components: Header}
]

const router = createRouter({ 
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app')