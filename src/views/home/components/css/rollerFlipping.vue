<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
const rollRef = ref()
let currentPage: Ref<number> = ref(0)
const cellWidth = 280
const cellHeight = 120
const count: number = 16
const oneRotate = (360 / count)
// 半径
const radius = (count * (cellHeight + 20)) / (Math.PI * 2)

onMounted(() => {

    handleRoll('')

})

const handleRoll = (type: string) => {
    const curRotate = parseFloat(rollRef.value.style.transform.replace('rotateX(', '').replace('deg)', '')) || 0
    if (type === 'pre') {
        currentPage.value = currentPage.value === count - 1 ? 0 : currentPage.value + 1
        rollRef.value.style.transform = `rotateX(${curRotate - oneRotate}deg) `
    } if (type === 'next') {
        currentPage.value = currentPage.value === 0 ? (count - 1) : currentPage.value - 1
        rollRef.value.style.transform = `rotateX(${curRotate + oneRotate}deg) `
    }

}

</script>

<template>
    <div class="roller-flipping">
        <div class="carousel">

            <div class="boxs" ref="rollRef" :style="{ width: cellWidth + 'px', height: cellHeight + 'px' }">
                <li v-for="(item, index) in count" :key="item" :class="{ active: currentPage === index }"
                    :style="{ width: cellWidth + 'px', height: cellHeight + 'px', transform: 'rotateX(' + (oneRotate * (item - 1)) + 'deg)' + 'translateZ(' + radius + 'px)' }">
                    <img v-if="index % 2 === 0" src="../../../../assets/images/css/book/内容2.jpg" alt="">
                    <img v-if="index % 3 === 0" src="../../../../assets/images/css/book/内容.jpg" alt="">
                    <img v-else src="../../../../assets/images/css/book/封面.png" alt="">
                    <p v-show="index === currentPage" class="page-label">{{ index + 1 }}</p>
                </li>

            </div>

            <div class="btns">
                <p v-for="item in ['pre', 'next']" :key="item" @click="handleRoll(item)">
                    <el-icon v-if="item === 'pre'" :size=20>
                        <i-ep-ArrowUpBold />
                    </el-icon> <el-icon v-else :size=20>
                        <i-ep-ArrowDownBold />
                    </el-icon>
                </p>
            </div>

        </div>
    </div>
</template>

<style scoped lang="less">
.roller-flipping {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-image: linear-gradient(to bottom, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .carousel {
        perspective: 2000px; // 其子元素会获得透视效果，而不是元素本身

        display: flex;
        align-items: center;
        justify-content: center;

        .boxs {

            display: flex;
            justify-content: center;
            transform-style: preserve-3d; // 子元素就可以相对于父元素所在的平面，进行 3D 变形操作
            transition: 1s;
            position: relative;

            li {
                overflow: hidden;
                position: absolute;
                list-style: none;
                border: 1px solid #ffffffd4;
                left: 0;
                top: 0;
                opacity: 0.4;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;

                .page-label {
                    position: absolute;
                    left: 3%;
                    bottom: -1%;
                }

                >img {
                    border-radius: 5px;
                    box-sizing: border-box;

                }

            }

            .active {
                opacity: 1;
                border: 1px sandybrown solid;
            }
        }

        .btns {
            position: absolute;
            transform: translateX(143px);

            >p {
                border: 2px solid #fff;
                padding: 5px 8px;
                border-radius: 5px;
                background-color: #ffffff73;
                cursor: pointer;

                &:hover {
                    background-color: #ffffffce;
                    color: #fbc2eb;
                }
            }
        }
    }


}
</style>