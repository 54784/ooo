<template>
  <div>
    <!-- 二级路由出口 -->
    <router-view></router-view>
    <!-- <FooterMusic></FooterMusic> -->
    <van-tabbar route active-color="red" inactive-color="#66666a">
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/boke" icon="apps-o">博客</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
      <van-tabbar-item to="/shequ" icon="shopping-cart-o">社区</van-tabbar-item>
      <van-tabbar-item to="/faxian" icon="user-o">发现</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import FooterMusic from '@/components/FooterMusic/index.vue'
</script>

<style scoped lang="scss">
.van-tabbar {
  background-color: $index_bgcolor;
  .van-tabbar-item {
    font-size: 13px;
  }
}

.van-tabbar-item--active {
  background-color: $index_bgcolor;
}
</style>
