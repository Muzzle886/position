<template>
  <div class="home-router">
    <IHeader @skip="skip"></IHeader>
    <main id="container"></main>
    <IFooter></IFooter>
    <SearchTab class="searchTab"
               @skip="skip"
               @skip2="skip2"></SearchTab>
  </div>
</template>
<script>

import mapdata from '../assets/hubei.json'
import prodata from '../assets/province.json'
import IHeader from './IHeader.vue'
import IFooter from './IFooter.vue'
import SearchTab from './SearchTab.vue'
import router from '../router'
import { useRoute } from "vue-router";
import { nextTick } from 'vue'
import axios from 'axios'
export default {
  components: {
    IHeader,
    IFooter,
    SearchTab
  },
  data () {
    return {
      zoom: 5,
      nowZoom: 5,
      labelList: [],
      provinceList: [],
      city: [],
      marklist: [],
      textlist: [],
      map: {},
      label: [],
      point_out: '',
      infoList: [],
      treedata: ''
    }
  },
  methods: {
    createPoint (name, intro, address, id) {
      var myGeo = new window.BMapGL.Geocoder();
      let that = this
      // 将地址解析结果显示在地图上，并调整地图视野
      myGeo.getPoint(address, function (point) {
        if (point) {
          let marker = new window.BMapGL.Marker(point, { title: name })
          that.map.addOverlay(marker)
          let opts = {
            position: point, // 指定文本标注所在的地理位置
            offset: new BMapGL.Size(-50, -80) // 设置文本偏移量
          };
          let label = new BMapGL.Label(name, opts);
          // 自定义文本标注样式
          label.setStyle({
            color: 'black',
            borderRadius: '5px',
            borderColor: '#ccc',
            padding: '10px',
            fontSize: '18px',
            height: '30px',
            lineHeight: '30px',
            fontFamily: '微软雅黑'
          });
          that.map.addOverlay(label);
          marker.addEventListener('click', function () {
            router.push(`/detail/${id}`)
          })

          that.marklist.push({
            context: address,
            dom: marker
          })
          that.textlist.push({
            context: address,
            dom: label
          })
        } else {
          alert('您选择的地址没有解析到结果！');
        }
      })
    },
    getPointList () {
      axios({
        method: "get",
        url: "/api/position/info",
        // url:"http://47.102.42.113:8082/position/info",
        params: {},
      }).then((res) => {
        this.infoList = res.data.data;
      })
    },
    createdLabel (text, opts) {
      let label = new window.BMapGL.Label(text, opts);
      let style = {
        "font-size": "14px",
        " font-family": "PingFangSC-Semibold, PingFang SC",
        "font-weight": "500",
        "color": " #FFFFFF",
        "line-height": " 14px",
        "padding": "9px 15px",
        "background-color": "#264947",
        "border": "none",
        "clip-path": "polygon(100% 0, 100% 50%, 60% 50%, 50% 78%, 40% 50%, 0 50%, 0 0)",
        "height": "46px"
      }
      label.setStyle(style)
      return label
    },

    // createChidlLabelList (address, paramsname, zoom, item) {
    //   let that = this
    //   let father = item
    //   let child = item.children
    //   console.log(father);
    //   let enshi = that.createdLabel(address, {
    //     position: new window.BMapGL.Point(father.point[0], father.point[1]),
    //     offset: new window.BMapGL.Size(-43, -49.92)
    //   })

    //   let temp = [
    //     that.createdCoverObejct(address, enshi, child)
    //   ]
    //   // that.setPositionAndZoom(that.map, this.getPosition(), zoom)
    //   temp.forEach(item => {
    //     if (paramsname == "provinceList") {
    //       item.dom.addEventListener('click', function () {
    //         that.setPositionAndZoom(that.map, this.getPosition(), zoom)
    //         // that.setLabelShow(map,zoom,that.labelList)
    //         let mapdata = that.provinceList
    //         let labelname = item.name
    //         for (let index = 0; index < mapdata.length; index++) {
    //           let element = mapdata[index];
    //           if (element.name == labelname) {
    //             that.$store.commit('update', { name: 'map_now', value: element })
    //             that.city = []
    //             element.children.forEach((item, index) => {
    //               that.createLabelList(item.name, 'city', 9, item)
    //             })
    //           }
    //         }
    //       })
    //     }
    //     that[paramsname].push(item)
    //   })
    // },

    async createLabelList (address, paramsname, zoom, item) {
      //创建地址解析器实例
      let that = this
      let myGeo = new window.BMapGL.Geocoder();
      // 将地址解析结果显示在地图上，并调整地图视野
      myGeo.getPoint(address, function (point) {
        if (point) {
          let enshi = that.createdLabel(address, {
            position: new window.BMapGL.Point(point.lng, point.lat),
            offset: new window.BMapGL.Size(-43, -49.92)
          })
          let temp = [
            that.createdCoverObejct(address, enshi, item.children)
          ]

          temp.forEach(item => {
            if (paramsname == "provinceList") {
              item.dom.addEventListener('click', function () {
                that.setPositionAndZoom(that.map, this.getPosition(), zoom)
                // that.setLabelShow(map,zoom,that.labelList)
                let mapdata = that.provinceList
                let labelname = item.name
                console.log(labelname);
                for (let index = 0; index < mapdata.length; index++) {
                  let element = mapdata[index];
                  if (element.name == labelname) {
                    that.$store.commit('update', { name: 'map_now', value: element })
                    that.city = []

                    element.children.forEach((item, index) => {
                      that.createLabelList(item.name, 'city', 9, item)
                    })
                  }
                }
              })
              console.log(address);
            } else {
              item.dom.addEventListener('click', function () {
                that.setPositionAndZoom(that.map, this.getPosition(), zoom)
                // that.setLabelShow(map,zoom,that.labelList)
              })
              console.log(address);
            }
            that[paramsname].push(item)
          })
          // label = point     
        } else {
          // alert('您选择的地址没有解析到结果！');
        }
      }, address)
    },

    createdCoverObejct (context, label, children) {
      return {
        name: context,
        dom: label,
        children: children
      }
    },

    //在map中渲染label
    setLabel (map, list) {
      list.forEach(item => {
        // console.log(item);
        map.addOverlay(item.dom)
      })
    },
    setLabelShow (map, zoom, labelList) {
      if (zoom >= 6) {
        labelList.forEach(item => {
          map.removeOverlay(item.dom)
        })
      } else {
        this.setLabel(map, labelList)
      }
      if (zoom >= 6 && zoom < 7) {
        this.setLabel(map, this.provinceList)
      } else {
        this.provinceList.forEach(item => {
          map.removeOverlay(item.dom)
        })
      }
      if (zoom >= 7 && zoom < 8) {
        this.setLabel(map, this.city)
      } else {
        this.city.forEach(item => {
          map.removeOverlay(item.dom)
        })
      }
      if (zoom >= 8) {
        this.infoList.forEach(item => {
          this.createPoint(item.trademark, item.brief_introduction, item.detailed_address, item.id)
        })
      } else {
        this.marklist.forEach(item => {
          map.removeOverlay(item.dom)
        })
        this.textlist.forEach(item => {
          map.removeOverlay(item.dom)
        })
      }
    },
    setPositionAndZoom (map, point, zoom) {
      map.centerAndZoom(point, zoom)
      // this.setLabelShow(map,zoom,this.labelList)
    },
    skip (item) {
      nextTick(() => {
        if (!Array.isArray(item)) {
          // 如果是搜索
          let that = this
          if ("trademark" in item) {
            let myGeo = new window.BMapGL.Geocoder();
            // 将地址解析结果显示在地图上，并调整地图视野
            myGeo.getPoint(item.detailed_address, function (point) {
              if (point) {
                let data = new window.BMapGL.Point(point.lng, point.lat)
                that.map.centerAndZoom(data, 9)
              } else {
                // alert('您选择的地址没有解析到结果！');
              }
            })
          } else {
            let point = new window.BMapGL.Point(item.point[0], item.point[1])
            this.setPositionAndZoom(this.map, point, item.zoom)
            if (!item.father) {
              item.children.forEach((Searchitem, index) => {
                this.provinceList.forEach(item => {
                  this.map.removeOverlay(item.dom)
                })
                this.provinceList = []
                this.createLabelList(Searchitem.name, 'provinceList', 7, Searchitem)
              })
            } else {
              this.city.forEach(item => {
                this.map.removeOverlay(item.dom)
              })
              this.city = []
              item.children.forEach((Searchitem, index) => {
                this.createLabelList(Searchitem.name, 'city', 9, Searchitem)
              })
            }
          }
        }
        else {
          console.log(1);
          let middle = new window.BMapGL.Point(111.632, 30.433)
          this.map.centerAndZoom(middle, 5)
        }
      }
      )
    },
    skip2 (item) {
      console.log("skip2--->", item)
    }
  },
  created () {
    let labelOfNorthEast = this.createdLabel("东北地区", {
      position: new window.BMapGL.Point(127.045, 44.746),
      offset: new window.BMapGL.Size(-43, -49.92)
    }
    )
    let labelOfNorthChina = this.createdLabel("华北地区", {
      position: new window.BMapGL.Point(115.533, 36.707),
      offset: new window.BMapGL.Size(-43, -49.92)
    })
    let labelOfCenterChina = this.createdLabel("华中地区", {
      position: new window.BMapGL.Point(111.632, 30.433),
      offset: new window.BMapGL.Size(-43, -49.92)
    })
    let labelOfEastChina = this.createdLabel("华东地区", {
      position: new window.BMapGL.Point(120.581, 31.894),
      offset: new window.BMapGL.Size(-43, -49.92)
    })
    let labelOfSouthChina = this.createdLabel("华南地区", {
      position: new window.BMapGL.Point(115.505, 23.155),
      offset: new window.BMapGL.Size(-43, -49.92)
    })
    let labelOfSouthWest = this.createdLabel("西南地区", {
      position: new window.BMapGL.Point(102.511, 23.981),
      offset: new window.BMapGL.Size(-43, -49.92)
    })
    let labelOfNorthWest = this.createdLabel("西北地区", {
      position: new window.BMapGL.Point(90.714, 37.500),
      offset: new window.BMapGL.Size(-43, -49.92)
    })

    // let hubei = this.createdLabel('湖北省(共500件)', {
    //   position: new window.BMapGL.Point(114.34, 30.54),
    //   offset: new window.BMapGL.Size(-43, -49.92)
    // })



    // let enshi = this.createdLabel('恩施(共90件)', {
    //   position: new window.BMapGL.Point(109.48, 30.27),
    //   offset: new window.BMapGL.Size(-43, -49.92)
    // })
    // let enshi = this.createdLabel('恩施(共90件)', {
    //   position: new window.BMapGL.Point(109.48, 30.27),
    //   offset: new window.BMapGL.Size(-43, -49.92)
    // })

    // 加点  
    this.getPointList()
    let yulu = new window.BMapGL.Marker(new window.BMapGL.Point(109.50, 30.20))
    yulu.addEventListener('click', function () {
      router.push('/detail')
    })

    //第一层 
    //  createdCoverObejct 创树
    let temp = [
      this.createdCoverObejct("东北地区", labelOfNorthEast),
      this.createdCoverObejct("华北地区", labelOfNorthChina),
      this.createdCoverObejct("华中地区", labelOfCenterChina),
      this.createdCoverObejct("华东地区", labelOfEastChina),
      this.createdCoverObejct("华南地区", labelOfSouthChina),
      this.createdCoverObejct("西南地区", labelOfSouthWest),
      this.createdCoverObejct("西北地区", labelOfNorthWest),
    ]

    temp.forEach(item => {
      this.labelList.push(item)
    })

    // let temp3 = [
    //   that.createdCoverObejct(address, enshi)
    // ]
    // temp3.forEach(item => {
    //   that.city.push(item)
    // })



    let temp4 = [
      this.createdCoverObejct("玉露", yulu)
    ]
    temp4.forEach(item => {
      this.marklist.push(item)
    })
  },
  mounted () {
    const route = useRoute();
    let that = this
    let map = new window.BMapGL.Map("container")
    let point = new window.BMapGL.Point(109.488, 38.272)
    this.map = map

    if (route.query) {
      this.skip(route.query)
    }
    mapdata.forEach(item => {
      this.createLabelList(item.name, 'city', 9)
    })
    // prodata.forEach((item, index) => {
    //   this.createLabelList(item.name, 'provinceList', 7, index)
    // })



    map.centerAndZoom(point, this.zoom)
    map.enableScrollWheelZoom(true)
    map.addEventListener('zoomend', function (e) {
      console.log(e.target.getZoom())
      that.setLabelShow(map, e.target.getZoom(), that.labelList)
    })

    //添加点击事件
    this.labelList.forEach(item => {
      const zoom = 6.5 // 跳转后地图的缩放比例
      item.dom.addEventListener('click', function () {
        let mapdata = that.$store.state.mapdata
        let labelname = item.name.slice(0, 2)
        for (let index = 0; index < mapdata.length; index++) {
          let element = mapdata[index];
          if (element.name == labelname) {
            that.$store.commit('update', { name: 'map_now', value: element })
            that.provinceList = []
            // that.treedata = element.children
            element.children.forEach((item, i) => {
              console.log(item);
              that.createLabelList(item.name, 'provinceList', 7, item)
            })
          }
        }
        that.setPositionAndZoom(map, this.getPosition(), zoom)
      })
    })

    this.city.forEach(item => {
      const zoom = 10
      item.dom.addEventListener('click', function () {
        that.setPositionAndZoom(map, this.getPosition(), zoom)
      })
    })
    this.setLabel(map, this.labelList)
  }
}
</script>
<style scoped>
.home-router {
  height: 100%;
}

main {
  height: calc(100% - 166px);
}

.searchTab {
  position: fixed;
  top: 193px;
  left: 53px;
}
</style>
