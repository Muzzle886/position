<template>
    <div class="search-router">
        <div class="search-model" icon="el-icon-search">
            <input type="text" v-model="searchText" @keyup.enter="updata">
            <el-icon>
                <Search />
            </el-icon>
        </div>
        <div class="search-data">
            <ul>
                <li v-for="item in showData" :key="item" @click="liclick(item)">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
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
                            name: "湖北省",
                            point: [114.34, 30.54],
                            zoom: 7,
                            children: [
                                {
                                    father: "湖北省",
                                    name: "恩施",
                                    point: [109.48, 30.27],
                                    zoom: 9.3,
                                    children: null
                                }
                            ]
                        },
                        {
                            father: "华中",
                            name: "河南省",
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
        }
    },
    methods: {
        liclick(item) {
            let flag = false
            if (item.children === null) {
                flag = true
            } else {
                this.lastSelect = this.nowSelect
                this.nowSelect = item
            }
            console.log(this.nowSelect)
            if (this.$attrs.skip !== null) {
                if (flag) {
                    this.$emit("skip", item)
                } else {
                    this.$emit("skip", this.nowSelect)
                }
            }
        },
        updata() {
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
        }
    },
    computed: {
        showData() {
            console.log("last", this.lastSelect)
            console.log("now", this.nowSelect)
            if (this.nowSelect === this.searchData) {
                return this.searchData
            }
            else if (this.nowSelect === null) {
                console.log("diyi")
                return this.searchData
            }
            else if (this.nowSelect.children === null) {
                console.log("dier")
                console.log(this.lastSelect)
                return this.lastSelect.children
            } else {
                console.log("disan")
                return this.nowSelect.children
            }
        }
    }
})
</script>
<style scoped>
.search-router {
    min-width: 130px;
    padding: 18px 10px;
    background: #FFFFFF;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3), -1px -1px 5px 1px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1000;
}

.search-router>.search-model {
    width: 100%;
    border-radius: 16px;
    box-sizing: border-box;
    border: 1px solid #979797;
    padding: 5px 9px;
    margin-bottom: 10px;
}

.search-router>.search-model>input {
    border: none;
}

.search-router>.search-data>ul {
    display: flex;
    flex-direction: column;
}

.search-router>.search-data>ul>li {
    text-align: center;
    padding: 8px;
    font-size: 13px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 14px;
    letter-spacing: 10px;
}
</style>