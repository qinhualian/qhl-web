

// export type TagsType = 'all' | 'js' | 'html' | 'css' | 'ts' | 'vue' | 'other'
export type CardsType = {
    title: string,
    desc: string,
    tags: string[],
    time: string,
    icon?: string,
    routerName?: string
}

export function concatPath(name: string) {
    return "/src/assets/images/home/cards/" + name
}
export function randomID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}



export const HomeCardData: CardsType[] = [{
    title: 'CSS效果---模拟书面翻页',
    desc: '用CSS实现书本翻页的效果:首先整体右移，然后对每一页沿着左中原点进行3D旋转（transform-style: preserve-3d;），旋转和放大的同时配合transition属性实现逐渐打开书本的过程',
    tags: ['css'],
    time: '2022-01-01',
    routerName: 'bookFlipping',
    icon: concatPath('书本翻页.gif')

}, {
    title: 'Vue3中reactive定义的数组赋空值不会触发视图更新',
    desc: '可以改变原数组的方法有:push,pop,shift,unshift,splice,sort,reverse',
    tags: ['vue'],
    time: '2022-01-01',
    icon: concatPath('vue3-1.png')
}, {
    title: 'img（src）动态更新,地址没有解析',
    desc: 'src被当做静态资源处理了，并没有进行编译。require是在运行时加载，import是编译时加载，如果需要使用import就提前导入图片',
    tags: ['vue', 'html'],
    time: '2022-01-01',
    icon: concatPath('vue3-2.png')
}, {
    title: 'git命令操作',
    desc: 'git的相关操作，例如初始化项目，分支之间的推送等',
    tags: ['other'],
    time: '2022-01-01',
    routerName: 'git'
}, {
    title: '前端实用网站收集',
    desc: '学习网站、配色、UI灵感、vue插件、css效果等',
    tags: ['other'],
    time: '2022-01-01',
    routerName: 'website'
}, {
    title: 'js中遍历数组和对象的方法',
    desc: 'forEach()、some()、every()',
    tags: ['js'],
    time: '2022-01-01',
    routerName: 'circulate',
}]