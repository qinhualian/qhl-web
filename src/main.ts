import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from "pinia";
// import './style.css'
// import 'normalize.css'
// import'./assets/style/reset.css'
// highlight 的样式，依赖包，组件
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import './assets/style/global.less'



createApp(App).use(router).use(ElementPlus).use(createPinia()).use(hljsVuePlugin).mount('#app')
