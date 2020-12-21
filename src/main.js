import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '../src/assets/site/css/style.css'
import '../src/utils/index'

createApp(App).use(store).use(router).mount('#app')
