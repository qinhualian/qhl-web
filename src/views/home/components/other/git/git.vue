<script setup lang="ts">
// import { ref } from 'vue'
import qhlMarkDown from '@/components/markdown/markdown.vue'
import { reactive } from 'vue';

const gitStudyData = reactive({
    data: [{
        title: '首次初始化和推送git', ulCodeList:
            `git init 
git add .
git commit -m "xxx"
git remote add origin
git push -u origin master`
    }, {
        title: 'xx', ulCodeList:
            `const handleViewDetails = (item: CardsType) => {
  if (item.path) {
    router.push({
      path: item.path,
    })
  }
} ` }]
})
</script>

<template>
    <qhlMarkDown :date="'2022-10-09'" :title="'git命令操作'">
        <div v-for="(item, index) in  gitStudyData.data " :key="item.title" class="section-item">
            <h3>{{ index + 1 }}.{{ item.title }}</h3>
            <div class="section-item-code">
                <highlightjs language="JavaScript" :autodetect="false" :code="item.ulCodeList">
                </highlightjs>

            </div>

        </div>
    </qhlMarkDown>
</template>

<style scoped></style>
