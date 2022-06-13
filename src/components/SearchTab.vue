<template>
  <transition name="search">
    <div class="search-router"
         v-show="isShowSearch">
      <div class="search-model"
           icon="el-icon-search">
        <input type="text"
               v-model="searchText"
               @keyup.enter="updata"
               @input="inputChange">
        <el-icon>
          <Search />
        </el-icon>
      </div>
      <div class="search-data">
        <ul>
          <el-scrollbar height="400px">
            <li v-for="item in showData"
                :key="item"
                @click="liclick(item)"
                class="search-item">
              {{ item.name }}
            </li>
          </el-scrollbar>
        </ul>
        <div class="icon_back">
          <button @click="back()">返回</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script >
import mapdata from '../assets/hubei.json'
import prodata from '../assets/province.json'
import { defineComponent } from 'vue'
import { Search } from '@element-plus/icons-vue'
import throttle from 'lodash/throttle'
import axios from 'axios'

export default defineComponent({
  data () {
    return {
      isShowSearch: false,
      searchText: "",
      searchData: [
        {
          father: null,
          name: "华东",
          children: [

          ]
        },
        {
          father: null,
          name: "华南",
          children: [

          ]
        },
        {
          father: null,
          name: "华中",
          point: [111.632, 30.433],
          zoom: 6.02,
          children: [
            {
              father: "华中",
              name: "湖南省",
              point: [114.34, 30.54],
              ProID: '',
              zoom: 7,
              children: []
            },
            {
              father: "华中",
              name: "湖北省",
              point: [114.34, 30.54],
              zoom: 7,
              ProID: '',
              children: []
            },
            {
              father: "华中",
              name: "河南省",
              ProID: '',
              children: []
            }
          ]
        },
        {
          father: null,
          name: "华北",
          children: [

          ]
        },
        {
          father: null,
          name: "西北",
          children: [

          ]
        },
        {
          father: null,
          name: "西南",
          children: [

          ]
        },
        {
          father: null,
          name: "东北",
          children: [

          ]
        }
      ],
      nowSelect: null,
      lastSelect: null,
      lastSearchData: []
    }
  },
  created () {
    let searchItem = [
      {
        father: null,
        name: "华东",
        children: [

        ]
      },
      {
        father: null,
        name: "华南",
        children: [

        ]
      },
      {
        father: null,
        name: "华中",
        point: [111.632, 30.433],
        zoom: 6.02,
        children: [
          {
            father: "华中",
            name: "河南省",
            point: [114.34, 30.54],
            ProID: '',
            zoom: 7,
            children: [
            ]
          },
          {
            father: "华中",
            name: "湖北省",
            point: [114.34, 30.54],
            zoom: 7,
            ProID: '',
            children: [
            ]
          },
          {
            father: "华中",
            name: "湖南省",
            ProID: '',
            point: [109.48, 30.27],
            children: []
          }
        ]
      },
      {
        father: null,
        name: "华北",
        children: [

        ]
      },
      {
        father: null,
        name: "西北",
        children: [

        ]
      },
      {
        father: null,
        name: "西南",
        children: [

        ]
      },
      {
        father: null,
        name: "东北",
        children: [

        ]
      }
    ]
    let pointArr = []
    let pointOut = 0
    //  添加proiD
    searchItem.forEach(item_out => {
      item_out.children.forEach(item_pro => {
        prodata.forEach(element => {
          if (element.name == item_pro.name) {
            item_pro.ProID = element.ProID
          }
        });
      });
    });

    // 往省里面加市
    searchItem.forEach(item_out => {
      // item_out -- 地区一级
      let index = 0
      item_out.children.forEach(item_pro => {
        // item_pro--省一级
        mapdata.forEach(item => {
          if (item.ProID == item_pro.ProID) {
            createPoint('', item.name)
            creatLine();
            // while(!pointArr[index]){},
            setTimeout((index) => {
              let Poidata = pointArr.find(poiitem => {
                return poiitem.address == item.name
              })
              console.log(Poidata, item.name);
              item_pro.children.push({

                father: item_pro.name,
                name: item.name,
                point: Poidata.point,
                zoom: 9.3,
                children: null
              })

            }, 5000, index);
            index++
          }
        });
      });
    });

    function creatLine () {
      //在此处判断是否赋值，如果赋值成功，异步刷新回调，那么四个值均不为初始值，若有值没有赋值成功则使用定时器重复刷新此函数
      if (pointOut != 0) {
        // console.log(pointOut);

      } else {
        setTimeout(() => {
          creatLine()
        }, 100);
        //如果没有赋值，则重复刷新此函数代码，直到赋值成功完成渲染
      }
    }
    function createPoint (marklist, address) {
      var myGeo = new window.BMapGL.Geocoder();
      // 将地址解析结果显示在地图上，并调整地图视野
      myGeo.getPoint(address, function (point) {
        if (point) {
          pointOut = { point: [point.lng, point.lat], address }
          pointArr.push(pointOut)
          // console.log(address);
        } else {
          alert('您选择的地址没有解析到结果！');
        }
      })
    }
    let that = this;
    setTimeout(() => {
      that.searchData = searchItem
      console.log('数据更新完成');
    }, 4000);

  },
  mounted () {
    setTimeout(() => {
      this.isShowSearch = true
    }, 500)

    this.lastSearchData = this.searchData
  },
  methods: {
    back () {
      if (this.nowSelect == this.lastSelect) {
        this.nowSelect = this.searchData
        this.$emit("skip", this.nowSelect)
      }if(this.nowSelect == this.searchData){

      } 
      else {
        this.nowSelect = this.lastSelect
        this.$emit("skip", this.nowSelect)
      }
    },
    liclick (item) {
      console.log('item', item.children === null);
      let flag = false
      if (item.children === null || !item.children) {
        flag = true
      } else {
        this.lastSelect = this.nowSelect
        this.nowSelect = item
      }
      if (this.$attrs.skip !== null) {
        if (flag) {
          this.$emit("skip", item)
        } else {
          this.$emit("skip", this.nowSelect)
        }
      }
    },
    updata () {
      console.log('updata')
      let result = null
      for (let i = 0; i < this.searchData.length; i++) {
        if (this.searchData[i].name.indexOf(this.searchText) !== -1) {
          result = this.searchData[i];
          this.lastSelect = this.nowSelect
          this.nowSelect = this.searchData
        }
        for (let j = 0; j < this.searchData[i].children.length; j++) {
          if (this.searchData[i].children[j].name.indexOf(this.searchText) !== -1) {
            result = this.searchData[i].children[j];
            this.lastSelect = this.nowSelect
            this.nowSelect = this.searchData[i]
          }
          for (let x = 0; x < this.searchData[i].children[j].children.length; x++) {
            if (this.searchData[i].children[j].children[x].name.indexOf(this.searchText) !== -1) {
              console.log("???")
              result = this.searchData[i].children[j].children[x];
              this.lastSelect = this.nowSelect
              this.nowSelect = this.searchData[i].children[j]
            }
          }
        }
      }
      if (this.$attrs.skip2 != null) {
        this.$emit("skip2", result)
      }
    },
    inputChange: throttle(function () {
      if (this.searchText === '') {
        return this.searchData = this.lastSearchData
      }
      axios.post(`/api/position/search?text=${this.searchText}`).then(res => {
        if (res.data.length !== 0) {
          for (const item of res.data.data) {
            item.name = item.trademark
          }
        }

        this.nowSelect = null
        this.searchData = res.data.data
      })
    }, 300)
  },
  computed: {
    showData () {
      if (this.nowSelect === this.searchData) {
        return this.searchData
      }
      else if (this.nowSelect === null) {
        console.log("diyi")
        return this.searchData
      }
      else if (this.nowSelect.children && this.nowSelect.children === null) {
        console.log("dier")
        console.log(this.lastSelect)
        return this.lastSelect.children
      } else {
        console.log("disan")
        return this.nowSelect.children
      }
    },

  },
  components: {
    Search
  }
})
</script>
<style scoped  lang="less">
.search-router {
  min-width: 130px;
  padding: 18px 10px;
  background: #ffffff;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3),
    -1px -1px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
}

.search-router > .search-model {
  width: 100%;
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px solid #979797;
  padding: 5px 9px;
  margin-bottom: 10px;
}

.search-router > .search-model > input {
  border: none;
  outline: 0;
}

.search-router > .search-data > ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
}

.search-item {
  text-align: center;
  padding: 20px;
  font-size: 20px;
  /* font-family: PingFangSC-Semibold, PingFang SC; */
  font-weight: lighter;
  line-height: 14px;
  letter-spacing: 10px;
  color: #000000;
}

.search-item:hover {
  color: #ba0000;
  cursor: pointer;
}

.search-enter-active {
  animation: fadeIn 0.5s ease-in;
}

.icon_back {
  display: flex;
  justify-content: center;

  button {
    width: 83px;
    height: 29px;
    background: #264947;
    border-radius: 7px;
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
    line-height: 22px;
    margin-right: 10px;
  }

  button:hover {
    cursor: pointer;
  }
}
</style>