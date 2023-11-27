// 1. 导入
import { createRouter, createWebHashHistory } from 'vue-router';
const HelloWorld = () => import("@/views/HelloWorld.vue");
const Home = () => import("@/views/home/index.vue");
const OtherGit = () => import("@/views/home/components/other/git/git.vue")
const OtherWebsite = () => import("@/views/home/components/other/website.vue")
const JsCirculate = () => import("@/views/home/components/js/circulate.vue")
// 2. 创建路由对象
const routes = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "index",
            component: Home,
            meta: {
                showFooter: true
            },
            children: [
                {
                    name: 'git',
                    path: '/other/git',
                    component: OtherGit,
                    meta: {
                        showFooter: false
                    },
                }, {
                    name: 'website',
                    path: '/other/website',
                    component: OtherWebsite,
                    meta: {
                        showFooter: false
                    },
                }, {
                    name: 'circulate',
                    path: '/js/circulate',
                    component: JsCirculate,
                    meta: {
                        showFooter: false
                    },
                }
            ]
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