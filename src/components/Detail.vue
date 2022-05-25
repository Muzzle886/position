<template>
  <IHeader></IHeader>
  <div id="detail">
    <div class="name">恩施玉露：华中地区——湖北省恩施市</div>
    <div class="category">生态农业型·茶叶文化 民间非遗型·传统技艺</div>
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
        <div>商标名称：恩施玉露</div>
        <div>注册号码：6761802</div>
        <div>商品类别：30类</div>
        <div>商标类型：证明商标</div>
        <div>注 册 人：恩施土家族苗族自治区茶产业协会</div>
      </div>
      <div class="brand-2">
        <div class="title">非遗信息</div>
        <div>非遗名称：恩施玉露制作技艺</div>
        <div>批次时间：2014(第四批)</div>
        <div>非遗类别：传统技艺</div>
        <div>保护单位：恩施玉露茶产业协会</div>
        <div>传 承 人：杨胜伟</div>
      </div>
    </div>
    <div class="br"></div>
    <div class="company">
      <div class="topbar">
        <div class="title">协会成员</div>
        <div class="title">
          <a href="">更多</a>
        </div>
      </div>
      <div class="container">
        <div>
          <table border="0">
            <caption></caption>
            <tbody>
              <tr>
                <th>县市</th>
                <th></th>
                <th>公司名称</th>
              </tr>
              <tr>
                <td>恩施市</td>
                <td></td>
                <td>恩施市润邦国际富硒茶业有限公司</td>
              </tr>
              <tr>
                <td>恩施市</td>
                <td></td>
                <td>恩施市润邦国际富硒茶业有限公司</td>
              </tr>
              <tr>
                <td>恩施市</td>
                <td></td>
                <td>恩施市润邦国际富硒茶业有限公司</td>
              </tr>
              <tr>
                <td>恩施市</td>
                <td></td>
                <td>恩施市润邦国际富硒茶业有限公司</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table border="0">
            <caption></caption>
            <tbody>
              <tr>
                <th>县市</th>
                <th></th>
                <th>公司名称</th>
              </tr>
              <tr>
                <td>恩施市</td>
                <td></td>
                <td>恩施市润邦国际富硒茶业有限公司</td>
              </tr>
              <tr>
                <td>恩施市</td>
                <td></td>
                <td>恩施市润邦国际富硒茶业有限公司</td>
              </tr>
              <tr>
                <td>恩施市</td>
                <td></td>
                <td>恩施市润邦国际富硒茶业有限公司</td>
              </tr>
              <tr>
                <td>恩施市</td>
                <td></td>
                <td>恩施市润邦国际富硒茶业有限公司</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="br"></div>
    <div class="video">
      <div class="title">影像媒介</div>
      <div>
        <a href="">
          <span>《文脉送中华》</span><br>
          <span>https://v.youku.com/v_show/id_XNDE5MjE3MjI2OA==</span>
        </a>
      </div>
      <div>
        <a href="">
          <span>《文脉送中华》</span><br>
          <span>https://v.youku.com/v_show/id_XNDE5MjE3MjI2OA==</span>
        </a>
      </div>
      <div>
        <a href="">
          <span>《文脉送中华》</span><br>
          <span>https://v.youku.com/v_show/id_XNDE5MjE3MjI2OA==</span>
        </a>
      </div>
      <div>
        <a href="">
          <span>《文脉送中华》</span><br>
          <span>https://v.youku.com/v_show/id_XNDE5MjE3MjI2OA==</span>
        </a>
      </div>
    </div>
    <div class="br"></div>
    <div class="photo">
      <div class="title">摄影媒介</div>
      <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }" :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide><img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdb391f85c74f72f773188467d10e2307d464730717c75ea0ab479e13756a1caa"
            alt="" /></swiper-slide>
        <swiper-slide><img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdb391f85c74f72f773188467d10e2307d464730717c75ea0ab479e13756a1caa"
            alt="" /></swiper-slide>
        <swiper-slide><img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdb391f85c74f72f773188467d10e2307d464730717c75ea0ab479e13756a1caa"
            alt="" /></swiper-slide>
      </swiper>
    </div>
    <div class="br"></div>
    <div class="paint">
      <div class="title">绘画媒介</div>
      <div class="img">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5237333fa6535bcc27bd34d416be927f8a5d86bdbcd0198147a7de895f3e7131"
          alt="">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng82dc0ace5ef643a8b68376d3a8b1aaf635ce3c75f06092ad7dc56e4ed8a083f2"
          alt="">
      </div>
    </div>
    <div class="br"></div>
    <div class="ad">
      <div class="title">广告媒介</div>
      <div class="img">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9ad3933328cfff9bfa9d59da90661403c4ce73feea47f6da088779fc6d4483a5"
          alt="">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4efd397ac6a047d836bbf70300ab104cee6ddb6f5689700f3a8823138c160479"
          alt="">
      </div>
    </div>
    <div class="br"></div>
    <div class="wx">
      <div class="title">典籍文献</div>
      <div>
        <h3>杨大华. 中国名茶品鉴金典 第2版[M]</h3>
        <p>
          恩施古称“施州”，为古巴子国故地，自古产茶。众所周知,《神农本草经》中有“神农尝百草，日遇七十二毒，得茶而解之”的记载，其中的荼即茶。恩施是当时神农活动的地区之一，因此也是中国茶文化的发祥地之一。根据东晋史学家常噱《华阳国志·巴志》记载:“周武王伐纣，实得巴蜀之师，……茶、蜜……皆纳贡之。”当时，恩施位于古巴子国腹地，这一记载表明恩施在3000年前就有种茶、用茶的历史。在公元3世纪西晋时的《荆州土地记》中亦有“武陵七县通出茶”的记载。唐代陆羽所撰《茶经》也记载了恩施的茶事:“茶者，南方之嘉木也。……其巴山峡川，有两人合抱者。”明代王一正《事物绀珠》中载:“茶类今茶名……荆州茶、施州茶、南木茶……”
        </p>
      </div>
      <div>
        <h3>俞寿康编著.中国名茶志[M].北京：农业出版社.1982.</h3>
        <p>
          蒸青为我国最早的制茶方法，唐代已盛行蒸青法制作绿茶，直到明朝改为盛行炒青法制绿茶。玉露为我国现存的采用蒸青法制作的绿茶，但是，古以蒸青制饼茶，今制条茶，制法上，除沿用蒸焙作用之外，其他工序则与唐朝陆羽《茶经》所载方法大有发展改变而不相同了。玉露茶产于湖北省'恩施县五峰山。以香清高、味醇爽、汤明澈、叶柔嫩、条匀齐而细紧圆直似针，.历受消费者赞赏，外销亦获较高评价，为我国著名绿茶之一。
        </p>
      </div>
      <div>
        <h3>农牧渔业部农业局主编.中国农业名产&nbsp;茶叶分册[M].北京：农业出版社.1985.</h3>
        <p>
          施南镇东，五座海拔500余米的山峰并联，倚江崛起，巍峨奇特。这就是湖北省恩施玉露的主产地五峰山。山峦波涌，翠峰叠嶂，累如贯珠，飞峙江弯的雄峰颠顶上，上层古塔．刺入云天，曲清江环抱山麓，激石扬润，川凶越谷蜿蜒东下，山坡缓圆，峪地平阔，漫山绿林之中，茶丛葱笼。恰如《恩施县志》所载:“水秀山明,询一城之胜也。”这里，气候温和，雨量充沛，朝夕云雾缭绕。青色砂质壤土，土层深厚肥沃。4—10月日照1031小时，年降水量1500毫米，无霜期为270--280天。这样的生态环境，可谓得天独厚,不但能促进茶树健旺生长，而且茶树芽叶的叶绿素、蛋白质、氨基酸、生物碱和芳香物质含量丰富，质软色绿，加之制工精湛而得形、色、香、味俱佳的玉露茶。恩施玉露属蒸青绿茶，它以优质鲜叶原料，精心焙制而成。形质塑造，巧夺天工，十分精湛。品质奇特,独树一帜。其总的品质特征是:外形色泽苍翠润绿，艳如鲜绿豆，条索紧圆、光滑、纤细、挺直如针，出口日本被誉为“松针”沸水冲泡，茶叶复展如生，沉降杯底，平伏完整，其色嫩绿明亮，茶汤清澈见底，碧绿而显荧光。
        </p>
      </div>
    </div>
    <div class="br"></div>
    <div class="ks">
      <div class="title">口述史</div>
      <div class="havenot">正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="qk">
      <div class="title">期刊</div>
      <p>[1]崔清梅,张强,梁金波,戴居会,罗鸿,陈清华,向俊.恩施玉露品质现状分析[J].中国茶叶,2020,42(02):40-45.
      </p>
      <p>
        [2]彭瑶瑜.恩施玉露地理标志利用的问题研究[J].法制与社会,2016(18):293-294.
      </p>
      <p>
        [3]吴彬,柳金阳.恩施自治州茶叶地理标志保护问题研究[J].南方农业,2015,9(09):114-115+117.[4]戴光忠.恩施州茶叶地理标志特征与农业知识产权保护[J].湖北农业科学,2015,54(03):757-763.
      </p>
      <p>
        [4]孙志国,王树婷,钟学斌,张敏.历史名茶恩施玉露的文化遗产保护研究[J].安徽农学通报(上半月刊),2011,17(01):161-163+174.
      </p>
      <p>
        [5]耿国彪.恩施硒茶展现民族魅力[J].绿色中国,2014(11):60-61.</p>
    </div>
    <div class="br"></div>
    <div class="gs">
      <div class="title">地标故事</div>
      <p>
        1.据传清朝康熙年间，恩施芭蕉黄连溪有一位姓兰的茶商，他自垒茶灶，亲自焙茶 ，因制出来的茶叶外形紧圆挺直，色绿如玉，故名恩施玉绿。
      </p>
      <p>
        2.据说在湖北恩施县西坪乡的上尧松林头，当地住了一个村民叫魏荫，以种茶、产茶为生，他在家里供奉了一座玉露菩萨的雕像，每天对其跪拜，并配以冲泡的三杯，十分诚心。一晚，魏荫晚上做梦，梦中出现了玉露菩萨的金身，他跪地作揖，却在石崖中发现了一颗奇异的茶树，正要看个究竟，却被狗叫醒了。
        第二天清早他就扛着锄头上山，果然在石崖缝中有一株破土而出的茶树，与梦中相似。他顺手摘了几十片茶叶回家烘制，冲泡之后有股奇香，喝了喉底回甘，精神大振。魏荫如获至宝，于是天天上山浇灌，精心培护，又将小茶树移到家中，分种在几口破铁锅里。他适时采制，果然品质特别好，用以招待客人，个个赞不绝口。
        有一天，私塾的老师跑来询问茶叶的详情。魏荫就如实说了，他还提到因为这茶采自于那座山崖上，而山崖看起来像个罗汉，后又因把它移到了铁锅里，于是想把这茶叫做“铁罗汉”。私塾先生觉得不妥，感觉罗汉有点狰狞，且认为茶是玉露托梦得来的，叫做“恩施玉露”更加贴切、雅致。魏荫叫好，于是“恩施玉露”就此诞生。如今，恩施玉露深受国人及东南亚一带的厚爱。
      </p>
      <p>
        3.相传，1720年前后，恩施尧阳松岩村(又名松林头村)有个老茶农魏荫(1703-1775)，勤于种茶，又笃信佛教，敬奉玉露。每天早晚一定在玉露佛前敬奉一杯清茶，几十年如一日，从未间断，有一天晚上，他睡熟了，朦胧中梦见自己扛着锄头走出家门，他来到一条溪涧旁边，在石缝中忽然发现一株茶树，枝壮叶茂，芳香诱人，跟自己所见过的茶树不同……第二天早晨，他顺着昨夜梦中的道路寻找，果然在玉露仑打石坑的石隙间，找到梦中的茶树。仔细观看，只见茶叶椭圆，叶肉肥厚，嫩芽紫红，青翠欲滴：魏荫十分高兴，将这株茶树挖回种在家小一口铁鼎里，悉心培育。因这茶是玉露托梦得到的，取名"玉露"。
      </p>
    </div>
    <div class="br"></div>
    <div class="xs">
      <div class="title">地标小说</div>
      <div class="havenot">正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="sw">
      <div class="title">地标散文</div>
      <div class="havenot">正在搜集中…</div>
    </div>
    <div class="br"></div>
    <div class="sg">
      <div class="title">地标诗歌</div>
      <p>朱述耀：恩施玉露茶：https://www.hbenshi.com.cn/xzkd/686247.html</p>
    </div>
    <div class="br"></div>
    <div class="zj">
      <div class="title">地标传记</div>
      <div class="havenot">正在搜集中…</div>
    </div>
    <div class="sm">本网站属于公益性学术性交流共享平台，以上影像、图片、文本等内容涉及版权问题，请联系本站！</div>
  </div>
  <IFooter></IFooter>
</template>

<script setup>
import IHeader from './IHeader.vue';
import IFooter from './IFooter.vue';
import '../assets/font.less'
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ref } from 'vue';
import { EffectCoverflow, Pagination } from "swiper"

let modules = ref([EffectCoverflow, Pagination]);

</script>

<style lang="less">
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 371px;
  height: 456px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

#detail {
  font-family: 'Alibaba-PuHeiTi';

  .br {
    margin: 30px auto;
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
    padding: 3px;

    a {
      color: #fff;
    }
  }

  .topbar {
    display: flex;
    justify-content: space-between;
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
  }

  .name {
    font-size: 28px;
    margin-top: 34px;
    margin-bottom: 30px;
  }

  .category {
    font-size: 22px;
  }

  .cover {
    margin-top: 34px;

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
    margin: auto;
    font-size: 22px;
    letter-spacing: 4px;
    font-weight: bold;

    .title {
      margin-bottom: 10px;
    }

    div {
      margin-top: 5px;
    }
  }

  .company {
    .container {
      max-width: 1230px;
      margin: auto;
      margin-top: 13px;
      font-size: 20px;
    }

    th {
      color: #264947;
      font-size: 22px;
    }

    tr>td:nth-child(2) {
      width: 63px;
    }
  }

  .video {
    .title {
      margin-bottom: 27px;
    }

    a {
      margin-top: 10px;
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

  .ad {
    img {
      max-height: 437px;
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

  .wx {
    h3 {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 4px;
      line-height: 31px;
      color: #000;
      margin-bottom: 0;
    }

    p {
      font-size: 22px;
      letter-spacing: 4px;
      line-height: 31px;
      text-indent: 2em;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.9);
    }
  }

  .qk p {
    font-size: 22px;
    letter-spacing: 4px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.9);
    line-height: 30px;
  }

  .gs p {
    font-size: 22px;
    color: rgba(0, 0, 0, 0.9);
    line-height: 31px;
    letter-spacing: 4px;
  }

  .sg p {
    font-size: 22px;
    font-family: 'Alibaba-PuHeiTi';
    font-weight: bold;
    color: #000000;
    letter-spacing: 4px;
    text-align: center;
    margin-top: 15px;
  }
}

#detail>div {
  margin: auto;
  max-width: 1440px;
}
</style>