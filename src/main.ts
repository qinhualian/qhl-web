import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store/index";
import router from'./router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import { createPinia } from"pinia";
// import './style.css'
// import 'normalize.css'
// import'./assets/style/reset.css'
import './assets/style/global.less'
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
