<template>
    <div class="guide-router">
        <div class="content">
            <div class="title">
                <h1>中国源创地理标志</h1>
                <h1>文化共享平台</h1>
            </div>
            <button @click="goToHomePage">立即开启</button>
        </div>
    </div>
</template>
<script>
import router from '../router'
import '../assets/font.less'

export default {
    data(){
        return {

        }
    },
    methods:{
        goToHomePage(){
            router.push('/home')
        }
    },
}
</script>
<style scoped>
    .guide-router{
        height: 100%;
        background-image: url(../assets/bcg-index.png);
        background-size: 100% 100%;
        background-attachment: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .guide-router > .content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .guide-router > .content > .title{
        text-align: center;
        margin-bottom: 53px;
    }
    .guide-router > .content > .title > h1{
        font-size: 47px;
        font-family: 'Alibaba-PuHeiTi';
        font-weight: normal;
        color: #FFFFFF;
        line-height: 83px;
        letter-spacing: 20px;
    }
     .guide-router > .content > button{
         font-family: 'Alibaba-PuHeiTi';
         color: #FFFFFF;
         line-height: 24px;
         font-size: 17px;
         padding: 6px 25px;
         border: none;
         border-radius: 10px;
         background-color: #cc5411;
         cursor: pointer;
     }
</style>