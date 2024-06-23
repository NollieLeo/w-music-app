<script setup lang="ts">
const navItems = [
  {
    title: '每日推荐',
    icon: 'calendar',
  },
  {
    title: '歌单',
    icon: 'view-module',
  },
  {
    title: '排行榜',
    icon: 'chart-bar',
  },
  {
    title: '电台',
    icon: 'detection',
  },
  {
    title: '直播',
    icon: 'user-talk',
  },
]
</script>

<template>
  <view class="navbar flex-row">
    <view class="navbar-item flex-column" v-for="item in navItems">
      <view class="navbar-item-icon flex-row">
        <wd-icon :name="item.icon" size="22px" />
      </view>
      <text class="navbar-item-text">{{ item.title }}</text>
    </view>
  </view>
</template>

<style lang="scss" src="./index.scss"></style>
