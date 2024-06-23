<template>
  <view class="ad-swiper">
    <wd-swiper
      :list="bannerList"
      :indicator="indicatorConfig"
      custom-indicator-class="custom-indicator-class"
      custom-image-class="custom-image"
      custom-next-image-class="custom-image-prev"
      custom-prev-image-class="custom-image-prev"
      previousMargin="24px"
      nextMargin="24px"
      autoplay
    />
  </view>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { SwiperProps } from 'wot-design-uni/components/wd-swiper/types'

defineProps({
  bannerList: Array as PropType<SwiperProps['list']>,
})

const indicatorConfig: Partial<SwiperProps['indicator']> = {
  type: 'dots-bar',
  showControls: true,
}
</script>

<style src="./index.scss" lang="scss"></style>
