<template>
    <transition name="guide">
        <div class="guide-router" v-if="isShowGuide">
            <div class="content">
                <div class="title">
                    <h1>中国源创地理标志</h1>
                    <h1>文化共享平台</h1>
                </div>
                <button @click="goToHomePage">立即开启</button>
            </div>
        </div>
    </transition>
</template>
<script setup>
import { ref } from 'vue';
import router from '../router'
import '../assets/font.less'

let isShowGuide = ref(true)

const goToHomePage = () => {
    router.push('/home')
    isShowGuide.value = false
}
</script>
<style scoped>
.guide-router {
    height: 100%;
    background-image: url(../assets/bcg-index.png);
    background-size: 100% 100%;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.guide-router>.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.guide-router>.content>.title {
    text-align: center;
    margin-bottom: 105px;
}

.guide-router>.content>.title>h1 {
    font-size: 93px;
    font-family: 'Alibaba-PuHeiTi';
    font-weight: bold;
    color: #FFFFFF;
    line-height: 83px;
    letter-spacing: 20px;
}

.guide-router>.content>button {
    font-family: 'Alibaba-PuHeiTi';
    color: #FFFFFF;
    line-height: 48px;
    font-size: 34px;
    font-weight: bold;
    padding: 12px 50px;
    border: none;
    border-radius: 20px;
    background-color: #CC5411;
    cursor: pointer;
}

.guide-leave-active {
    animation: slideOutUp .5s ease;
}
</style>