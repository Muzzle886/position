<template>
  <div class="bg">
    <div id="header">
      <div class="wrapper">
        <div class="left">
          <div class="title">
            <router-link to="/home">
              <a href="">
                数字地图
              </a>
            </router-link>

          </div>
          <div class="link">
            <div>
              区域分布:
              <a href="/home">华东</a>
              <a href="/home">华南</a>
              <a href="/home">华中</a>
              <a href="/home">华北</a>
              <a href="/home">西北</a>
              <a href="/home">西南</a>
              <a href="/home">东北</a>
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
            <router-link to="/detail">
              <a href="">产学研创</a>
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
</script>

<style lang="less">
.bg {
  background: url(../assets/SketchPng8f48c59cc4d3fb380c92955163224e0480f2bc6f2339047481634c26f7cf6ce2.png) no-repeat;
  background-size: 100% 100%;
}

#header {
  height: 166px;
  display: flex;
  font-family: 'Alibaba-PuHeiTi';
  color: #fff;
  background: rgba(0, 18, 5, 0.37);


  a {
    text-decoration: none;
    color: #fff;
  }

  .wrapper {
    width: 1400px;
    height: 88px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    .title {
      box-sizing: border-box;
      width: 86px;
      height: 86px;
      background: #fff;
      font-size: 30px;
      font-weight: bold;
      margin-right: 25px;
      font-family: PingFangSC-Semibold, PingFang SC;

      a {
        display: block;
        color: #264947;
        line-height: 40px;
        width: 75px;
        height: 84px;
        margin: auto;
        text-align: center;
      }
    }
  }

  .wrapper>div {
    display: flex;
  }

  .link {
    font-size: 20px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: PingFangSC-Semibold, PingFang SC;
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