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
        <li><a href="">中南民族大学美术学院·湖北名师工作室</a></li>
        <li><a href="">商世民教授/博士生导师</a></li>
        <li><a href="">139-0719-1690</a></li>
      </ul>
      <div class="code">
        <img
          src="https://zgdlwhbz.oss-cn-hangzhou.aliyuncs.com/static/SketchPngf1241e848a3f29c01944161197f8955c2d0716552f4acbe0b026eea9e78cddbe.png"
          alt=""
        />
      </div>
    </div>
    <div class="icp">
      <a
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42018502006238"
        style="margin-right: 20px"
      >
        <img src="../assets/beian.png" alt="" />
        <span> 鄂公安网备42018502006238号 </span>
      </a>
      <a href="https://beian.miit.gov.cn/"> 鄂ICP备2022015072号-1 </a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less">
#footer {
  // height: 68px;
  background: #2a2a2a;

  .wrapper {
    width: 1300px;
    display: flex;
    justify-content: space-between;
    margin: auto;

    .code {
      img {
        max-height: 130px;
      }
    }
  }

  .wrapper > ul {
    padding: 0;
    text-align: center;
    list-style: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    margin: 12px auto 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      font-size: 14px;
      line-height: 20px;
      font-weight: normal;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.7);
    }

    a:hover {
      color: #ba0000;
    }
  }

  .icp {
    text-align: center;
    height: 30px;

    a {
      font-size: 14px;
      line-height: 20px;
      font-weight: normal;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.7);

      img {
        vertical-align: -5px;
      }
    }
  }
}
</style>
