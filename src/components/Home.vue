<template>
  <div id="home">
  </div>
</template>

<script setup>
const BMap = window.BMap;
var map = new BMap.Map("container", {
  coordsType: 5 // coordsType指定输入输出的坐标类型，3为gcj02坐标，5为bd0ll坐标，默认为5。
  // 指定完成后API将以指定的坐标类型处理您传入的坐标
});          // 创建地图实例  
var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
map.centerAndZoom(point, 15);    
</script>

<style lang="less">
</style>