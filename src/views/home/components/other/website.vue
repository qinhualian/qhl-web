<script setup lang="ts">
import qhlMarkDown from '@/components/markdown/markdown.vue'
import { reactive } from 'vue'

const concatPath = (name: string) => {
    return "/src/assets/images/other/" + name + ".png"
}


const gitStudyData = reactive({
    data: [{
        title: '查看bundle包的大小', url: 'https://bundlephobia.com/', desc: '每当你想使用一个新的库或者包时，一定要看看这个包的 bundle size', img: concatPath('website-bundlephobia'),

    },
    {
        title: 'UI灵感', url: 'https://dribbble.com/following', desc: '大量优质的UI资源', img: concatPath('website-dribbble')
    },
    {
        title: 'vanta-网站动态背景插件', url: 'https://www.vantajs.com/', desc: '网站动态背景插件,可以配置颜色速度，会跟随鼠标移动。但是样式比较少，背景不能渐变，并且有几个效果不可用', img: concatPath('website-vanta'),
        some: [{ name: 'particles.js', url: 'https://github.com/VincentGarreau/particles.js' }]
    },
    ]
})



</script>

<template>
    <qhlMarkDown>
        <div v-for="(item, index) in  gitStudyData.data " :key="item.title" class="section-item">
            <h3> <a :href="item.url" target="_blank">{{ index + 1 }}.{{ item.title }}</a> </h3>
            <div class="section-item-content">
                <h4>{{ item.desc }}</h4>
                <img :src="item.img" alt="">
                <ul class="some" v-if="item.some?.length">

                    类似的有：
                    <li v-for="item2 in item.some" :key="item2.name"><a :href="item2.url">{{ item2.name }}</a></li>
                </ul>
            </div>

        </div>
    </qhlMarkDown>
</template>

<style scoped></style>
