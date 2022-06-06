<template>
  <div class="bg">
    <div id="header">
      <div class="wrapper">
        <div class="left">
          <div class="title">
            <router-link to="/home">
              <p class="top-left">数</p>
              <p class="top-right">字</p>
              <p class="bottom-left">地</p>
              <p class="bottom-right">图</p>
            </router-link>

          </div>
          <div class="link">
            <div>
              区域分布:
              <template v-for="item in areaData" :key="item.name">
                <a @click="syncMap(item)">{{ item.name }}</a>
              </template>
            </div>
            <div>
              类型选择:
              <div>
                <a href="/home">非遗文化</a>
                <a href="/home">生态文化</a>
                <a href="/home">中欧地理标志</a>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="title">
            <router-link to="/home">
              <p class="top-left">产</p>
              <p class="top-right">学</p>
              <p class="bottom-left">研</p>
              <p class="bottom-right">创</p>
            </router-link>
          </div>
          <div class="link">
            <div>
              艺术创意:
              <a href="javascript:void(0);">影像媒介</a>
              <a href="javascript:void(0);">摄影媒介</a>
              <a href="javascript:void(0);">绘画媒介</a>
              <a href="javascript:void(0);">广告媒介</a>
            </div>
            <div>
              文学创作:
              <div>
                <a href="javascript:void(0);">文脉挖掘</a>
                <a href="javascript:void(0);">故事创作</a>
                <a href="javascript:void(0);">思政教育</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import '../assets/font.less'
import { ref, defineEmits } from 'vue'
import { useRoute, useRouter } from "vue-router";

const emit = defineEmits(['skip'])
const areaData = ref([
  {
    name: '华东',
    point: [120.581, 31.894],
    zoom: 6.02
  },
  {
    name: '华南',
    point: [115.505, 23.155],
    zoom: 6.02
  },
  {
    name: '华中',
    point: [111.632, 30.433],
    zoom: 6.02
  },
  {
    name: '华北',
    point: [115.533, 36.707],
    zoom: 6.02
  },
  {
    name: '西北',
    point: [90.714, 37.500],
    zoom: 6.02
  },
  {
    name: '西南',
    point: [102.511, 23.981],
    zoom: 6.02
  },
  {
    name: '东北',
    point: [127.045, 44.746],
    zoom: 6.02
  },
])

const route = useRoute();
const router = useRouter();

const syncMap = (item) => {
  if (route.fullPath.indexOf('detail') === 1) {
    router.push({
      path: '/home',
      query: { point: item.point, zoom: item.zoom }
    })
  } else {
    emit('skip', item)
  }

}
</script>

<style lang="less">
.bg {
  background: url(../assets/SketchPng8f48c59cc4d3fb380c92955163224e0480f2bc6f2339047481634c26f7cf6ce2.png) no-repeat;
  background-size: 100% 100%;
}

#header {
  height: 166px;
  display: flex;
  color: #fff;
  background: rgba(0, 18, 5, 0.37);


  a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }

  a:hover {
    color: #ba0000;
  }

  .wrapper {
    width: 1400px;
    height: 88px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    // font-weight: 550;

    .title {
      box-sizing: border-box;
      width: 88px;
      height: 88px;
      background: #fff;
      font-weight: 600;
      margin-right: 25px;
      position: relative;

      p {
        // display: flex;
        color: #264947;
        font-size: 36px;
        line-height: 36px;
        margin: 0;
        padding: 5px;
      }

      .top-left {
        position: absolute;
        left: 0;
        top: 0;
      }

      .top-right {
        position: absolute;
        right: 0;
        top: 0;
      }

      .bottom-left {
        position: absolute;
        left: 0;
        bottom: 0;
      }

      .bottom-right {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }

  .wrapper>div {
    display: flex;
  }

  .link {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .link div a:nth-child(2n+1) {
    margin: 0 25px;
  }

  .link div a:first-child {
    margin-left: 10px;
  }

  .link div a:last-child {
    margin-right: 0;
  }

  .link div:nth-child(2n) {
    display: flex;

    div {
      flex: 1;
      display: flex;
      justify-content: space-between;
    }

  }
}
</style>