<script setup lang="ts">
//导入vanta.js和three.js，以及ref等hooks

interface Props {
    date: string,
    title: string,
}
withDefaults(defineProps<Props>(), { date: '2031-10-23', title: '标题' });



</script>

<template>
    <div class="qhl-markdown">
        <div class="qhl-markdown-content">
            <header>
                <div>笔记时间:{{ date }}</div>
            </header>
            <h1>{{ title }}</h1>
            <div class="markdown-content-slot">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style  src="./markdown.less" lang="less"></style>
