<template>
    <div class="home-router">
        <IHeader @skip="skip"></IHeader>
        <main id="container"></main>
        <IFooter></IFooter>
        <SearchTab class="searchTab" @skip="skip" @skip2="skip2"></SearchTab>
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
    data() {
        return {
            zoom: 5,
            nowZoom: 5,
            labelList: [],
            provinceList: [],
            city: [],
            marklist: [],
            map: {},
            label: [],
            point_out: '',
        }
    },
    methods: {
        createPoint(marklist, address) {
            var myGeo = new window.BMapGL.Geocoder();
            // 将地址解析结果显示在地图上，并调整地图视野
            myGeo.getPoint(address, function (point) {
                if (point) {
                    console.log(point);
                    // map.addOverlay(new window.BMapGL.Marker(point))
                    let marker = new window.BMapGL.Marker(point)
                    marklist.push({
                        context: address,
                        dom: marker
                    })
                } else {
                    alert('您选择的地址没有解析到结果！');
                }
            })
        },
        getPointList(marklist) {
            axios({
                method: "get",
                url: "/api/position/info",
                // url:"http://47.102.42.113:8082/position/info",
                params: {},
            }).then((res) => {
                let infoList = res.data.data;
                console.log(infoList);
                infoList.forEach(item => {
                    this.createPoint(marklist, item.detailed_address)
                })
            })
        },
        createdLabel(text, opts) {
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
        //  市级
        async createLabelList(address, paramsname, zoom) {
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
                        that.createdCoverObejct(address, enshi)
                    ]
                    temp.forEach(item => {
                        item.dom.addEventListener('click', function () {
                            that.setPositionAndZoom(that.map, this.getPosition(), zoom)
                            // that.setLabelShow(map,zoom,that.labelList)
                        })
                        that[paramsname].push(item)
                    })
                    // label = point     
                } else {
                    // alert('您选择的地址没有解析到结果！');
                }
            }, address)
        },

        createdCoverObejct(context, label) {
            return {
                name: context,
                dom: label,
                children: [

                ]
            }
        },
        //在map中渲染label
        setLabel(map, list) {
            list.forEach(item => {
                map.addOverlay(item.dom)
            })
        },
        // setProvince(map,list){
        //     list.forEach(item=>{
        //         item.prov.get(item.context, function (rs) {
        //             var hole = new window.BMapGL.Polygon(rs.boundaries, {
        //                 fillColor: 'blue',
        //                 fillOpacity: 0.2
        //             });
        //             item.dom = hole
        //             map.addOverlay(item.dom);
        //         });
        //     })
        // },
        setLabelShow(map, zoom, labelList) {
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
                this.setLabel(map, this.marklist)
                // this.createPoint(map,"武汉市");
            } else {
                this.marklist.forEach(item => {
                    map.removeOverlay(item.dom)
                })
            }
        },
        setPositionAndZoom(map, point, zoom) {
            map.centerAndZoom(point, zoom)
            // this.setLabelShow(map,zoom,this.labelList)
        },
        skip(item) {
            nextTick(() => {
                console.log("item------>", item)
                let point = new window.BMapGL.Point(item.point[0], item.point[1])
                this.setPositionAndZoom(this.map, point, item.zoom)
                console.log('skip ok');
            })
        },
        skip2(item) {
            console.log("skip2--->", item)
        }
    },
    created() {
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
        this.getPointList(this.marklist)
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
    mounted() {
        let that = this
        console.log(mapdata);
        const route = useRoute();
        if (route.query) {
            this.skip(route.query)
        }
        mapdata.forEach(item => {
            this.createLabelList(item.name, 'city', 9)
        })
        prodata.forEach(item => {
            this.createLabelList(item.name, 'provinceList', 7)
        })
        let map = new window.BMapGL.Map("container")
        let point = new window.BMapGL.Point(109.488, 38.272)
        this.map = map
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
                console.log(1);
                that.setPositionAndZoom(map, this.getPosition(), zoom)
                // that.setLabelShow(map,zoom,that.labelList)
            })
        })
        this.provinceList.forEach(item => {
            const zoom = 8 // 跳转后地图的缩放比例
            console.log(item.dom);
            item.dom.addEventListener('click', function () {

                that.setPositionAndZoom(map, this.getPosition(), zoom)
                // that.setLabelShow(map,zoom,that.labelList)
            })
        })
        this.city.forEach(item => {
            const zoom = 10
            item.dom.addEventListener('click', function () {
                console.log(3);
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
