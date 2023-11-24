// src/store/index.ts
// import { defineStore } from 'pinia';
// import { createPinia } from 'pinia';
// import piniaPersist from 'pinia-plugin-persist';
import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useWebRouter = defineStore('web-router', {
    // other options...
})