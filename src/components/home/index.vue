<script setup lang="ts">
import { Ref, onMounted, reactive, ref } from 'vue';
import { CardsType, HomeCardData } from './home-data';


let searchValue: Ref<string> = ref('') // 创建基础类型 ref 如果传入的是引用类型，内部源码也是调用 reactive 来实现的 ref 返回的属性在 template 中使用，直接用就是了，但是在 JS 中使用，需要通过 .value 获取
let tagList: string[] = reactive(['all', 'js', 'html', 'css', 'ts', 'vue', 'other']) // 创建响应式
let cardList: { data: CardsType[] } = reactive({ data: HomeCardData }) // 创建响应式
onMounted(() => {
  cardList.data = HomeCardData.map((item,index) => {
    return {
      ...item,
      index: 1
    }
  })

})
</script>

<template>
  <div class="home-web-wrapper">
    <header class="nav-bar">
      <div class="nav-control-logo">
        <img src="@/assets/images/home/小壁纸.png" />
      </div>
      <div class="nav-control-wrapper">
        <a href="">首页</a>
        <a href="">其他</a>
        <el-input v-model="searchValue" placeholder="Search">
          <template #prefix>
            <el-icon :size="20"><i-ep-Search /></el-icon>
          </template>
        </el-input>
      </div>
    </header>
    <div class="home-blurb-content-wrapper">
      <div class="blurb-desc">
        <h1>Code</h1>
        <div class="text">30 seconds of code provides a curated collection of short code snippets for all your development
          needs. Our collection spans many topics, ranging from simple coding problems to theoretical concepts and
          development techniques.</div>
      </div>
      <div class="blurb-img">
        <img src="@/assets/images/home/小壁纸.png">
      </div>
    </div>
    <div class="home-labels-content-wrapper">
      <el-tag v-for="item in tagList" :key="item">{{ item }}</el-tag>
    </div>
    <div class="home-cards-content-wrapper">
      <div class="card-item" v-for="item in cardList.data" :key="item.title">
        <img :src="item.icon" alt="缩略图">
        <div class="card-item__right">
          <h2>{{ item.title }}</h2>
          <p class="desc">{{ item.desc }}</p>
          <p class="bottom">
            <span v-for="item2 in item.tags" :key="item2">{{ item2 }}</span>,
            <span>{{ item.time }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./index.less" lang="less"></style>
