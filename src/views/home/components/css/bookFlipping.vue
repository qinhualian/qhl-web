<script setup lang="ts">
import { Ref, ref } from 'vue';

let countPage: Ref<number[]> = ref([])
const boxRefs = ref<HTMLElement[]>([])
const bookpageRef = (el: any) => {
    if (el) {
        boxRefs.value.push(el)
    }
}

const handleFlip = (num: number) => {
    if (num !== 3 && num !== 4) return
    let rotate = 0
    if (countPage.value.includes(num)) {
        // 已经翻过页就翻回来
        rotate = num === 3 ? 40 : num === 4 ? 35 : 0
        countPage.value.splice(countPage.value.indexOf(num), 1)
    } else {
        rotate = num === 3 ? 145 : num === 4 ? 140 : 0
        countPage.value.push(num)
    }
    boxRefs.value[num - 1].style.transform = "rotateY(-" + rotate + "deg) scale(1.1)"
}
const handleMouseleave = () => {
    boxRefs.value.forEach((_item, index) => {
        boxRefs.value[index].style.transform = ""
    })

}
</script>

<template>
    <div class="book-flipping">
        <h1>点击可翻页</h1>
        <div class="book" ref="bookFlippingRef" @mouseleave="handleMouseleave">

            <div class="back" data-id="back"></div>
            <div v-for="num in 6" :key="num" :class="'page' + (num) + (num % 2 !== 0 ? ' l' : ' r')" :ref='bookpageRef'
                @click="handleFlip(num)">

            </div>
            <div class="front" data-id="front"></div>
        </div>
    </div>
</template>

<style scoped lang="less">
.book-flipping {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    >h1 {
        position: absolute;
        top: 25%;
    }

    .book {
        width: 200px;
        height: 300px;
        position: relative;
        cursor: pointer;
        transform-style: preserve-3d;
        backface-visibility: visible; // 元素的背面是否对用户可见。它是正面的镜像
        transition: .2s;



        >div {
            position: absolute;
            width: 200px;
            height: 100%;
            top: 0;
            left: 0;
            transform-style: preserve-3d;
            transform-origin: left center;
            transition: transform .5s ease-in-out, box-shadow .35s ease-in-out; // ease-in-out 规定以慢速开始和结束的过渡效果
        }

        .front,
        .back {
            background-image: url(../../../../assets/images/css/book/封面.png);
            background-size: cover;
        }

        .l,
        .r {
            border-bottom-right-radius: 0.5em;
            border-top-right-radius: 0.5em;
            background: #f5f5f5;
        }

        .page2 {
            background-image: url(../../../../assets/images/css/book/内容.jpg);
            background-size: cover;
        }

        .page4 {
            background-image: url(../../../../assets/images/css/book/内容2.jpg);
            background-size: cover;
        }

        &:hover {
            transform: translateX(100px);

            >div {
                box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
            }

            .front {
                transform: rotateY(-160deg) scale(1.1); // 围绕 y 轴将形状旋转参数指定的量
            }

            .page6 {
                transform: rotateY(-20deg) scale(1.1);
            }

            .page5 {
                transform: rotateY(-30deg) scale(1.1);
            }

            .page4 {
                transform: rotateY(-35deg) scale(1.1);
            }

            .page3 {
                transform: rotateY(-40deg) scale(1.1);
            }

            .page2 {
                transform: rotateY(-150deg) scale(1.1);
            }

            .page1 {
                transform: rotateY(-155deg) scale(1.1);
            }

            .back {
                transform: rotateY(-10deg) scale(1.1);
            }
        }

    }
}
</style>