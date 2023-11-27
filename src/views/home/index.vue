<script setup lang="ts">

import { Ref, onMounted, onBeforeUnmount, reactive, ref, watch, nextTick, computed } from 'vue';
import { CardsType, HomeCardData, concatPath } from '@/datas/home-data';
import router from '@/router';
// import { useWebRouter } from '@/store';
import * as THREE from 'three'
import CLOUDS from 'vanta/src/vanta.net'
import { RouteRecordName } from 'vue-router';

// 定义
let searchValue: Ref<string> = ref('') // 创建基础类型 ref 如果传入的是引用类型，内部源码也是调用 reactive 来实现的 ref 返回的属性在 template 中使用，直接用就是了，但是在 JS 中使用，需要通过 .value 获取
let tagList: string[] = reactive(['all', 'js', 'html', 'css', 'ts', 'vue', 'other']) // 创建响应式
let cardList: { data: CardsType[] } = reactive({ data: HomeCardData }) // 创建响应式
let curTag: Ref<string> = ref('all')
//使用ref引用挂载区域
const markdownArea = ref(null)
let vantaEffect: any = null;

// 计算属性
const showCardList = computed(() => {
  return curTag.value === 'all' ? cardList.data : cardList.data.filter((item) => { return item.tags.includes(curTag.value) })
})

// 生命周期方法
onMounted(() => {
  cardList.data = HomeCardData.map((item, index) => {
    return {
      ...item,
      index,
    }
  })


})
onBeforeUnmount(() => {
  if (vantaEffect) {
    vantaEffect.destroy()
  }
})


// 自定义函数
/**
 * @method 点击卡片查看详情
 * @param  item:CardsType 卡片信息
 */
const handleViewDetails = (item: CardsType) => {
  if (item.routerName) {
    router.push({
      name: item.routerName,
      query: { title: item.title }
    })
  }
}

/**
 * @method 是否渲染动态背景
 * @param  toName 路由名称
 */
const handleShowVanta = (toName: RouteRecordName) => {
  if (toName === 'index') {
    vantaEffect = CLOUDS({
      el: markdownArea.value,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      points: 13.00,
      maxDistance: 19.00,
      spacing: 13.00,
      backgroundColor: '#060613',
      color: '#89964e'
    })
  }
}

/**
 * @method 根据标签筛选卡片
 * @param  item:CardsType 卡片信息
 */
const handleFilterByTag = (tag: string) => {
  curTag.value = tag
}

watch(() => router.currentRoute.value.name, (toName: any) => {
  nextTick(() => handleShowVanta(toName))

}, { immediate: true, deep: true })
</script>

<template>
  <div class="home-web-wrapper" v-if="$route.meta.showFooter" ref="markdownArea">
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
      <el-tag v-for="item in tagList" :key="item" @click="handleFilterByTag(item)"
        :class='{ "active-tag": curTag === item }'>{{ item }}</el-tag>
    </div>
    <div class="home-cards-content-wrapper">
      <div class="card-item animate__animated animate__bounceInLeft" v-for="item in showCardList" :key="item.title">
        <el-image title="查看大图" :src="item?.icon || concatPath('默认')" :preview-src-list="[item?.icon || concatPath('默认')]"
          fit="cover" :max-scale="7" :min-scale="0.2"></el-image>
        <div class="card-item__right">
          <h2 @click="handleViewDetails(item)">{{ item.title }}</h2>
          <p class="desc">{{ item.desc }}</p>
          <p class="bottom">
            <span v-for="item2 in item.tags" :key="item2">{{ item2 }},</span>
            <span>{{ item.time }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <router-view v-else></router-view>
</template>

<style scoped src="./index.less" lang="less"></style>
