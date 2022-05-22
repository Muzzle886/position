<template>
  <div id="header">
    <div class="wrapper">
      <div class="left">
        <div class="title">数字地图</div>
        <div class="link">
          <div>
            区域分布：
            <a href="">华东</a>
            <a href="">华南</a>
            <a href="">华中</a>
            <a href="">华北</a>
            <a href="">西北</a>
            <a href="">西南</a>
            <a href="">东北</a>
          </div>
          <div>
            类型选择：
            <a href="">非遗文化</a>
            <a href="">生态文化</a>
            <a href="">中欧地理标志</a>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">产学研创</div>
        <div class="link">
          <div>
            艺术创意：
            <a href="">影像媒介</a>
            <a href="">摄影媒介</a>
            <a href="">绘画媒介</a>
            <a href="">广告媒介</a>
          </div>
          <div>
            文学创作：
            <a href="">文脉挖掘</a>
            <a href="">故事创作</a>
            <a href="">思政教育</a>
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
#header {
  height: 83px;
  background: url(../assets/SketchPng8f48c59cc4d3fb380c92955163224e0480f2bc6f2339047481634c26f7cf6ce2.png);
  display: flex;
  font-family: 'HarmonyOS-Sans-Regular';
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
  }

  .wrapper {
    width: 1350px;
    height: 47px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    .title {
      box-sizing: border-box;
      width: 44px;
      height: 44px;
      background: #fff;
      color: #264947;
      font-weight: bold;
      padding: 1px;
      letter-spacing: 5px;
      margin-right: 22px;
    }
  }

  .wrapper>div {
    display: flex;
  }

  .link {
    font-size: 14px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .link>div {
    width: 330px;
    display: flex;
    justify-content: space-between;
  }
}
</style>