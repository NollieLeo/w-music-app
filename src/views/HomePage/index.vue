<template>
  <view class="homePage">
    <ad-swiper :banner-list="bannerList" />
    <nav-bar />
    <personalized :personalized-list="personalizedList" />
    <album-newest :album-newest-list="albumNewestList" />
  </view>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAlbumNewest, useBanners, usePersonalized } from './hooks'
import { AdSwiper, NavBar, Personalized, AlbumNewest } from './views'

const { bannerList } = useBanners()
const { personalizedList } = usePersonalized()
const { albumNewestList } = useAlbumNewest()

onMounted(() => {
  console.log('HomePage')
})
</script>

<style lang="scss" src="./index.scss"></style>
