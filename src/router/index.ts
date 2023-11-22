// 1. 导入
import { createRouter, createWebHashHistory } from 'vue-router';
const HelloWorld = () => import("@/components/HelloWorld.vue");
const Home = () => import("@/components/home/index.vue");
// 2. 创建路由对象
const routes = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "index",
            meta: {
                title: "首页",
            },
            component: Home,
        },
        {
            path: "/helloworld",
            name: "helloworld",
            meta: {
                title: "helloworld",
            },
            component: HelloWorld,
        }
    ]
});

// 3. 导出
export default routes;