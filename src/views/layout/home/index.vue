<template>
  <div class="home">
    <NavBar></NavBar>
    <SwpierTop></SwpierTop>
    <Nav></Nav>
    <SongList></SongList>
    <!-- <FooterMusic ></FooterMusic> -->
    <div>首页111</div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import SwpierTop from './components/SwpierTop.vue'
import Nav from './components/Nav.vue'
import SongList from './components/SongList.vue'
import FooterMusic from '@/components/FooterMusic/index.vue'

import { onMounted } from 'vue'
import { useFooterMusicStore, useUserStore } from '@/store/index'
const useFooterMusic = useFooterMusicStore()
const userStore = useUserStore()
onMounted(() => {
  // useFooterMusic.getMusic()
  userStore.getUserInfo()
})
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  background: #f7f8fc;
}
</style>
