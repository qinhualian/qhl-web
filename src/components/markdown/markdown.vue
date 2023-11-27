<script setup lang="ts">
import { CardsType, HomeCardData, concatPath } from '@/datas/home-data';
import { Ref, onMounted, ref } from 'vue';
import router from '@/router';

//导入vanta.js和three.js，以及ref等hooks

// interface Props {
//     date: string,
//     title: string,
// }
// withDefaults(defineProps<Props>(), { date: '2031-10-23', title: '标题' });
const defaultCardInfo: CardsType = {
    title: '标题',
    desc: '描述',
    tags: ['all'],
    time: '2022-01-01',
    icon: concatPath('默认')
}
let cardInfo: Ref<CardsType> = ref(defaultCardInfo)


// 生命周期方法
onMounted(() => {
    cardInfo.value = HomeCardData.find((item) => { return item.title === router.currentRoute.value.query.title }) || defaultCardInfo
})

</script>

<template>
    <div class="qhl-markdown">
        <div class="qhl-markdown-content">
            <header>
                <div>笔记时间:{{ cardInfo.time }}</div>
            </header>
            <h1>{{ cardInfo.title }}</h1>
            <div class="markdown-content-slot">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style  src="./markdown.less" lang="less"></style>
