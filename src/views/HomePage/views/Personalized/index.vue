<script setup lang="ts">
import type { PropType } from 'vue'
import type { PersonalizedTransformed } from '../../types'
import { MusicSection } from '@/views/HomePage/components'

defineProps({
  personalizedList: Array as PropType<Array<PersonalizedTransformed>>,
})
</script>

<template>
  <music-section class="personalized">
    <template #header>
      <view class="header flex-row">
        <text class="title">推荐歌单</text>
        <wd-button class="btn" size="small" type="info" plain>歌单广场</wd-button>
      </view>
    </template>
    <template #content>
      <view class="item flex-column" v-for="item in personalizedList">
        <image class="image" :src="item.picUrl" mode="heightFix" />
        <text class="name ellipsis">{{ item.name }}</text>
        <view class="count flex-row">
          <wd-icon name="play-circle" size="14px"></wd-icon>
          <text>{{ item.formatedCount }}</text>
        </view>
      </view>
    </template>
  </music-section>
</template>

<style lang="scss" src="./index.scss"></style>
