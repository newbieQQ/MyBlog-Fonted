import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuemarkdown from 'vue-markdown';

createApp(App).use(store).use(router).use(vuemarkdown).mount('#app')
