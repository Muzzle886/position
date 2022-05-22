<template>
  <div id="footer">
    <div class="wrapper">
      <ul>
        关于我们
        <li><a href="">平台首页</a></li>
        <li><a href="">文化理念</a></li>
        <li><a href="">常见问题</a></li>
      </ul>
      <ul>
        源创服务
        <li><a href="">商标设计</a></li>
        <li><a href="">商标注册</a></li>
        <li><a href="">法律咨询</a></li>
      </ul>
      <ul>
        快捷导航
        <li><a href="">国家知识产权局</a></li>
        <li><a href="">国家外文局</a></li>
        <li><a href="">国家文化与旅游部</a></li>
      </ul>
      <ul>
        数据支持与合作
        <li><a href="">中南民族大学商世民教授/博导</a></li>
        <li><a href="">137-0719-1690</a></li>
      </ul>
      <div class="code">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf1241e848a3f29c01944161197f8955c2d0716552f4acbe0b026eea9e78cddbe"
          alt="">
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less">
#footer {
  // height: 68px;
  background: #2A2A2A;

  .wrapper {
    width: 645px;
    display: flex;
    justify-content: space-between;
    margin: auto;

    .code {
      img {
        max-height: 88px;
      }
    }
  }

  .wrapper>ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    color: #fff;
    font-size: 14px;
    margin: 8px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      font-size: 12px;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>