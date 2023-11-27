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
        title: '与上游连接断开需要重新连接', desc: "报错信息:fatal:'origin' does not appear to be a git repository fatal:Could not read from remote repository.原因是本地分支和远程分支断开连接，需要重新建立连接", ulCodeList:
            `git remote –v // 可以检查是否断开 如果控制台没有输出内容就代表已经断开
git remote add origin http.....
git push -u origin master` }]
})
</script>

<template>
    <qhlMarkDown>
        <div v-for="(item, index) in  gitStudyData.data " :key="item.title" class="section-item">
            <h3>{{ index + 1 }}.{{ item.title }}</h3>
            <div class="section-item-code">
                <h4 v-if="item.desc">{{ item.desc }}</h4>
                <highlightjs language="JavaScript" :autodetect="false" :code="item.ulCodeList">
                </highlightjs>

            </div>

        </div>
    </qhlMarkDown>
</template>

<style scoped></style>
