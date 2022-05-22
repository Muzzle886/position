<script setup>
import Detail from './components/Detail.vue';
import IHeader from './components/IHeader.vue';
import IFooter from './components/IFooter.vue';
import Home from './components/Home.vue';
</script>

<template>
  <IHeader></IHeader>
  <!-- <Detail></Detail> -->
  <Home></Home>
  <IFooter></IFooter>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: '微软雅黑';
}

a {
  text-decoration: none;
}
</style>
