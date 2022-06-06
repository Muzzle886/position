<template>
  <IHeader></IHeader>
  <div id="detail">
    <div class="name">{{ info.trademark }}：{{ getNameByProvince(info.province) }}——{{ info.province + info.city }}</div>
    <div class="category">
      <span v-if="info.ecology_type !== ''">生态农业型·{{ info.ecology_type }}</span>
      <span v-if="info.folk_type !== ''">民间非遗型·{{ info.folk_type }}</span>
    </div>
    <div class="cover">
      <img
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng77a4cd172e334c4962d47ad1b1cb1b150e0d7a24094049655186035179745a25"
        alt="">
      <img
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3db8536689d8f5f647e063eb04497f2aab7e5ff3b52dc2b37452acb95362e988"
        alt="">
    </div>
    <div class="brand">
      <div class="brand-1">
        <div class="title">商标信息</div>
        <div>商标名称：{{ info.trademark }}</div>
        <div>注册号码：{{ info.registration_number }}</div>
        <div>商品类别：{{ info.category }}类</div>
        <div>商标类型：{{ info.trademark_type }}</div>
        <div>注 册 人：{{ info.registrant }}</div>
      </div>
      <div class="brand-2" v-if="info.culture_name !== ''">
        <div class="title">非遗信息</div>
        <div>非遗名称：{{ info.culture_name }}</div>
        <div>批次时间：{{ info.batch }}</div>
        <div>非遗类别：{{ info.culture_category }}</div>
        <div>保护单位：{{ info.protection_unit }}</div>
        <div>传 承 人：{{ info.inheritor }}</div>
      </div>
    </div>
    <div class="br"></div>
    <div class="company">
      <div class="topbar">
        <div class="title">协会成员</div>
        <div class="title" v-if="companys.length > 8">
          <a href="">更多</a>
        </div>
      </div>
      <div class="container" v-if="companys.length > 0">
        <div class="container-left">
          <div>
            <div class="container-title">县市</div>
            <span v-for="company of companys.slice(0, 3)">{{ company.city }}</span>
          </div>
          <div>
            <div class="container-title">公司名称</div>
            <span v-for="company of companys.slice(0, 3)">{{ company.company_name }}</span>
          </div>
        </div>
        <div class="container-right" v-if="companys.length > 4">
          <div>
            <span class="container-title">县市</span>
            <span v-for="company of companys.slice(4, 7)">{{ company.city }}</span>
          </div>
          <div>
            <span class="container-title">公司名称</span>
            <span v-for="company of companys.slice(4, 7)">{{ company.company_name }}</span>
          </div>
        </div>
      </div>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="video">
      <div class="title">影像媒介</div>
      <div v-if="images.length > 0">
        <div v-for="image of images">
          <a :href="image.url" target="_blank">
            <span>{{ image.title }}</span><br>
            <span>{{ image.url }}</span>
          </a>
        </div>
      </div>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="photo">
      <div class="title">摄影媒介</div>
      <swiper :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="30" :pagination="{
        clickable: true,
      }" class="mySwiper" v-if="photos.length > 0">
        <swiper-slide v-for="photo of photos"><img :src="photo.url" :alt="photo.photo_name" /></swiper-slide>
      </swiper>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="paint">
      <div class="title">绘画媒介</div>
      <swiper :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="30" :pagination="{
        clickable: true,
      }" class="mySwiper" v-if="paints.length > 0">
        <swiper-slide v-for="paint of paints"><img :src="paint.url" :alt="paint.photo_name" /></swiper-slide>
      </swiper>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="ad">
      <div class="title">广告媒介</div>
      <swiper :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="30" :pagination="{
        clickable: true,
      }" class="mySwiper" v-if="ads.length > 0">
        <swiper-slide v-for="ad of ads"><img :src="ad.url" :alt="ad.photo_name" /></swiper-slide>
      </swiper>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="wx">
      <div class="title">典籍文献</div>
      <div v-if="wxs.length > 0">
        <div v-for="wx of wxs">
          <h3>{{ wx.title }}</h3>
          <p>{{ wx.content }}</p>
        </div>
      </div>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="ks">
      <div class="title">口述史</div>
      <div v-if="kss.length > 0">
        <div v-for="ks of kss">
          <h3>{{ ks.title }}</h3>
          <p>{{ ks.content }}</p>
        </div>
      </div>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="qk">
      <div class="title">期刊</div>
      <div v-if="qks.length > 0">
        <p v-for="qk of qks">{{ qk.content }}</p>
      </div>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="gs">
      <div class="title">地标故事</div>
      <div v-if="gss.length > 0">
        <p v-for="gs of gss">{{ gs.content }}</p>
      </div>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="xs">
      <div class="title">地标小说</div>
      <div v-if="xss.length > 0">
        <div v-for="xs of xss">
          <h3>{{ xs.title }}</h3>
          <p>{{ xs.content }}</p>
        </div>
      </div>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="sw">
      <div class="title">地标散文</div>
      <div v-if="sws.length > 0">
        <div v-for="sw of sws">
          <h3>{{ sw.title }}</h3>
          <p>{{ sw.content }}</p>
        </div>
      </div>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="sg">
      <div class="title">地标诗歌</div>
      <div v-if="sgs.length > 0">
        <p v-for="sg of sgs">{{ sg.content }}</p>
      </div>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="zj">
      <div class="title">地标传记</div>
      <div v-if="zjs.length > 0">
        <div v-for="zj of zjs">
          <h3>{{ zj.title }}</h3>
          <p>{{ zj.content }}</p>
        </div>
      </div>
      <div class="havenot" v-else>正在搜集中…</div>
    </div>
    <div class="sm">本网站属于公益性学术性交流共享平台，以上影像、图片、文本等内容涉及版权问题，请联系本站！</div>
  </div>
  <IFooter></IFooter>
</template>

<script setup>
import { useRoute } from 'vue-router'
import IHeader from './IHeader.vue';
import IFooter from './IFooter.vue';
import '../assets/font.less'
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ref } from 'vue';

import axios from 'axios'

import { getNameByProvince } from './dq'

let id = useRoute().params.id

let ads = ref([])
let companys = ref([])
let zjs = ref([])
let info = ref({})
let images = ref([])
let wxs = ref([])
let xss = ref([])
let kss = ref([])
let paints = ref([])
let qks = ref([])
let photos = ref([])
let sgs = ref([])
let sws = ref([])
let gss = ref([])

// 获取广告媒介
axios.get('/api/product/advertising', {
  params: {
    id
  }
}).then(resp => {
  ads.value = resp.data.data
})

// 获取公司信息
axios.get('/api/product/association', {
  params: {
    id
  }
}).then(resp => {
  companys.value = resp.data.data
})

// 获取传记
axios.get('/api/product/biography', {
  params: {
    id
  }
}).then(resp => {
  zjs.value = resp.data.data
})

// 获取地标信息
axios.get('/api/product/coordinates', {
  params: {
    id
  }
}).then(resp => {
  info.value = resp.data.data
})

// 获取影像媒介
axios.get('/api/product/images', {
  params: {
    id
  }
}).then(resp => {
  images.value = resp.data.data
})

// 获取摄影媒介
axios.get('/api/product/photographic', {
  params: {
    id
  }
}).then(resp => {
  photos.value = resp.data.data
})

// 获取经典文献
axios.get('/api/product/literature', {
  params: {
    id
  }
}).then(resp => {
  wxs.value = resp.data.data
})

// 获取小说
axios.get('/api/product/novel', {
  params: {
    id
  }
}).then(resp => {
  xss.value = resp.data.data
})

// 获取口述史
axios.get('/api/product/oral', {
  params: {
    id
  }
}).then(resp => {
  kss.value = resp.data.data
})

// 获取绘画
axios.get('/api/product/painting', {
  params: {
    id
  }
}).then(resp => {
  paints.value = resp.data.data
})

// 获取期刊
axios.get('/api/product/periodical', {
  params: {
    id
  }
}).then(resp => {
  qks.value = resp.data.data
})

// 获取诗歌
axios.get('/api/product/poetry', {
  params: {
    id
  }
}).then(resp => {
  sgs.value = resp.data.data
})

// 获取散文
axios.get('/api/product/prose', {
  params: {
    id
  }
}).then(resp => {
  sws.value = resp.data.data
})

// 获取故事
axios.get('/api/product/story', {
  params: {
    id
  }
}).then(resp => {
  gss.value = resp.data.data
})
</script>

<style lang="less">
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-wrapper {
  align-items: center;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  max-width: 371px;
  // max-height: 437px;
  height: 100%;
}

.swiper-slide img {
  display: block;
  // height: 100%;
  width: 100%;
}

#detail {
  .br {
    margin: 68px auto;
    width: 1167px;
    height: 49px;
    background: url(../assets/SketchPngc97578cd260cdba5793e870f3503315a756ffd4d2a1125cd5f4e4b9fef7015d2.png) no-repeat;
    background-size: 1167px 49px;
  }

  .title {
    display: inline-block;
    letter-spacing: 5px;
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 33px;
    background: #264947;
    font-family: Alibaba-PuHuiTi-B, Alibaba-PuHuiTi;
    padding: 3px;

    a {
      color: #fff;
    }
  }

  .topbar {
    display: flex;
    justify-content: space-between;

    a {
      padding: 3px 6px;
    }
  }

  .topbar div:last-child {
    letter-spacing: 0;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }

  .havenot {
    font-size: 22px;
    line-height: 30px;
    font-family: 'Alibaba-PuHeiTi';
    font-weight: bold;
    color: #000000;
    letter-spacing: 4px;
    text-align: center;
    margin-top: 15px;
  }

  .name,
  .category,
  .cover {
    text-align: center;
    font-weight: bold;
    letter-spacing: 4px;
    font-family: Alibaba-PuHuiTi-B, Alibaba-PuHuiTi;

  }

  .name {
    font-size: 28px;
    margin-top: 34px;
    margin-bottom: 30px;
  }

  .category {
    font-size: 22px;
    display: flex;
    justify-content: center;
    gap: 80px;
  }

  .cover {
    margin-top: 68px;

    img {
      height: 370px;
      margin-right: 32px;
    }

    img:last-child {
      margin-right: 0;
    }
  }

  .brand {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 50px auto;
    font-size: 22px;
    letter-spacing: 4px;
    font-weight: bold;
    font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;

    .title {
      margin-bottom: 24px;
      font-family: Alibaba-PuHuiTi-B, Alibaba-PuHuiTi;
    }

    div {
      margin-top: 16px;
    }
  }

  .company {
    .container {
      max-width: 1230px;
      margin: auto;
      margin-top: 13px;
      font-size: 20px;

      .container-left,
      .container-right {
        display: grid;
        grid-template-columns: 60px 1fr;
        font-family: Alibaba-PuHuiTi-H, Alibaba-PuHuiTi;
        gap: 70px;

        .container-title {
          font-weight: 700;
          color: #264947;
          text-align: center;
          margin-top: 24px;
        }

        span {
          margin-top: 24px;
          font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        }

        div:first-child span {
          display: flex;
          width: 60px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        div:last-child span {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }


    }
  }

  .video {
    div {
      margin-top: 26px;
    }

    a {
      font-size: 22px;
      line-height: 30px;
      letter-spacing: 4px;
      color: #000;
      font-weight: bold;
    }
  }

  .sm {
    margin: 44px auto;
    text-align: center;
    font-size: 22px;
    line-height: 30px;
    font-weight: bold;
    letter-spacing: 4px;
  }

  .paint {
    img {
      max-height: 369px;
    }
  }

  .paint,
  .ad {
    .img {
      margin-top: 22px;
      display: flex;
      justify-content: space-between;
    }
  }

  .wx,
  .sw,
  .zj {
    h3 {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 4px;
      line-height: 32px;
      color: #000;
      margin-top: 40px;
      margin-bottom: 0;
    }

    p {
      font-size: 22px;
      letter-spacing: 4px;
      line-height: 32px;
      text-indent: 2em;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.9);
      margin: 0;
    }
  }

  .qk p {
    font-size: 22px;
    letter-spacing: 4px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.9);
    line-height: 30px;
    margin-top: 36px;
    margin-bottom: 0;
  }

  .gs p {
    font-size: 22px;
    color: rgba(0, 0, 0, 0.9);
    line-height: 32px;
    letter-spacing: 4px;
    margin-top: 40px;
    margin-bottom: 0;
  }

  .sg p {
    font-size: 22px;
    font-family: 'Alibaba-PuHeiTi';
    font-weight: bold;
    color: #000000;
    letter-spacing: 4px;
    text-align: center;
    margin-top: 24px;
  }
}

#detail>div {
  margin: auto;
  max-width: 1440px;
}
</style>