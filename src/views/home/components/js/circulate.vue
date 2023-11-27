<script setup lang="ts">
import { ref, onMounted } from 'vue'
import qhlMarkDown from '@/components/markdown/markdown.vue'



const circulateStudyData = ref(
    [{
        title: 'forEach',
        code: `
// 数组内容、数组索引、数组本身
arr.forEach((value, index, array)=> {
console.log(value,index,array)
})
`,
        advantageList: [{
            name: ' 用于调用数组的每个元素，并将元素传递给回调函数,本身没有返回值'
        }, {
            name: 'forEach对于空数组是不会执行回调函数'
        }, {
            name: '对浅拷贝出来的数据进行操作，更改数据也会连带把原数组给改掉'
        }],
        disadvantageList: [{
            name: '不支持break、continue跳出循环，如果强制跳出需要try catch操作',
            code: ''
        }, {
            name: 'return无效,forEach没有返回值,虽然return不报错但是无效',
            code: ''
        },
        {
            name: '遍历数组时，对数组添加项和删除项可能会不正确',
            code: ''
        }, {
            name: 'forEach循环中来调用接口不会等待接口完成了之后再去调用下一个接口，而是同时调用。无法使用await来等待异步操作完成',
            code: ''
        }]
    },
    {
        title: 'some',
        code: `
// some 中任意一个只要大于3 返回 true, 没有任何一个 返回 false
let c= a.some((num, index, a) => {  
    return num > 3;
})
console.log(c) // true 
        `,
        advantageList: [{
            name: ' 数组里面所有的元素只要有一个符合条件就返回true,返回一个boolean'
        },],
        disadvantageList: [{ name: '不会对空数组进行检测' }, { name: '不会改变原始数组' }, { name: 'some一直在找符合条件的值，一旦找到，则不会继续迭代下去。' },
        { name: '退出循环return true' }
        ]
    },
    {
        title: 'every',
        code: `
// every 中每一个元素都要大于3 返回 true, 否则返回 false
let a = [1, 2, 3, 4, 5, 6];
let b= a.every((num, index, a) => {  
       return num > 3;
   })
console.log(b) // false 
        `,
        advantageList: [{
            name: ' 数组里面所有的元素都符合条件才返回true,返回一个boolean'
        },],
        disadvantageList: [{ name: '不会对空数组进行检测' }, { name: '不会改变原始数组' }, { name: '一旦有一个不符合条件，则不会继续迭代下去' },
        { name: '退出循环return false' }]
    },
    ]
)

onMounted(() => {


})

</script>

<template>
    <qhlMarkDown>
        <div v-for="(item, index) in  circulateStudyData " :key="item.title" class="section-item">
            <h3> {{ index + 1 }}.{{ item.title }} </h3>
            <div class="section-item-content">
                <h4>使用说明</h4>
                <ul>
                    <li v-for="item2 in item.advantageList" :key="item2.name">{{ item2.name }}</li>
                </ul>
                <highlightjs language="JavaScript" :autodetect="false" :code="item.code" v-if="item.code">
                </highlightjs>
                <h4>避坑和容易出错的地方</h4>
                <ul>
                    <li v-for="item2 in item.disadvantageList" :key="item2.name">{{ item2.name }}</li>
                </ul>
            </div>

        </div>
    </qhlMarkDown>
</template>

<style scoped></style>
