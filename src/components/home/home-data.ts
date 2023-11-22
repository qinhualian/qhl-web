
type TagsType = 'all' | 'js' | 'html' | 'css' | 'ts' | 'vue' | 'other'
export interface CardsType {
    title: string,
    desc: string,
    tags: TagsType[],
    time: string,
    icon: string,
}

export function concatPath(name: string) {
    return "/src/assets/images/home/cards/" + name + ".png"
}


export const HomeCardData: CardsType[] = [{
    title: 'Vue3中reactive定义的数组赋空值不会触发视图更新',
    desc: '可以改变原数组的方法有:push,pop,shift,unshift,splice,sort,reverse',
    tags: ['vue'],
    time: '2023-11-22',
    icon: concatPath('vue3-1')
}, {
    title: 'img（src）动态更新,地址没有解析',
    desc: 'src被当做静态资源处理了，并没有进行编译。require是在运行时加载，import是编译时加载，如果需要使用import就提前导入图片',
    tags: ['vue', 'html'],
    time: '2023-11-22',
    icon: concatPath('vue3-2')
}]