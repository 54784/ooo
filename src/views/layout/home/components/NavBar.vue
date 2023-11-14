<template>
  <div class="nav">
    <div class="more">
      <svg-icon name="more" width="20px" height="20px"></svg-icon>
    </div>
    <div class="search">
      <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
    </div>
    <div class="listen">
      <svg-icon name="listen" width="25px" height="25px"></svg-icon>
    </div>
    <!-- <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
      @click-right="onClickRight" /> -->
  </div>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import { ref } from 'vue'
const onClickLeft = () => history.back()
const onClickRight = () => showToast('按钮')

const value = ref()
</script>

<style lang="scss" scoped>
.nav {
  background: linear-gradient(to right, #e6e6fc, #eae5fc, #f5e5f2);
  width: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search {
    // overflow: hidden;
    .van-search {
      background: none;
      width: 300px;
      :deep(.van-icon) {
        left: 64px;
      }
      :deep(.van-search__content) {
        background-color: transparent;
      }
      :deep(.van-cell) {
        border: 1px solid #d1caeb;
        border-radius: 18px;
        background: linear-gradient(to right, #e1e1fd, #e2dcfa, #f0d9ec);
      }
    }
  }
}
:deep(.van-search) {
  border-radius: 10px;
}
</style>
