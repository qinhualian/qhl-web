

// export type TagsType = 'all' | 'js' | 'html' | 'css' | 'ts' | 'vue' | 'other'
export interface CardsType {
    title: string,
    desc: string,
    tags: string[],
    time: string,
    icon: string,
    path?: string
}

export function concatPath(name: string) {
    return "/src/assets/images/home/cards/" + name + ".png"
}


export const HomeCardData: CardsType[] = [{
    title: 'Vue3中reactive定义的数组赋空值不会触发视图更新',
    desc: '可以改变原数组的方法有:push,pop,shift,unshift,splice,sort,reverse',
    tags: ['vue'],
    time: '2022-01-01',
    icon: concatPath('vue3-1')
}, {
    title: 'img（src）动态更新,地址没有解析',
    desc: 'src被当做静态资源处理了，并没有进行编译。require是在运行时加载，import是编译时加载，如果需要使用import就提前导入图片',
    tags: ['vue', 'html'],
    time: '2022-01-01',
    icon: concatPath('vue3-2')
}, {
    title: 'git命令操作',
    desc: 'git的相关操作，例如初始化项目，分支之间的推送等',
    tags: ['other'],
    time: '2022-01-01',
    icon: concatPath('默认'),
    path: '/other/git'
}, {
    title: '前端实用网站收集',
    desc: '学习网站、配色、UI灵感、vue插件、css效果等',
    tags: ['other'],
    time: '2022-01-01',
    icon: concatPath('默认'),
    path: '/other/website'
}]
