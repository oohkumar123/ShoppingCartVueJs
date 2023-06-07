import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import test from './views/sub-views/test'

createApp(App).component('test', test).use(store).use(router).mount('#app');
