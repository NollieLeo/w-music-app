<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import type { AlbumNewest } from '@/apis'
import { MusicSection } from '@/views/HomePage/components'
import { filter } from 'lodash-es'

const props = defineProps({
  albumNewestList: Array as PropType<Array<AlbumNewest>>,
})

const type = ref(1)

const currentAlbumList = computed(() => {
  return filter(props.albumNewestList, (_, idx) => (idx + 1) % type.value === 0)
})

const handleSwitchType = (tempType: number) => {
  type.value = tempType
}
</script>

<template>
  <music-section class="ablum-newest">
    <template #header>
      <view class="header flex-row">
        <view class="header-switch flex-row">
          <text @click="handleSwitchType(1)" :class="{ title: true, light: type === 2 }">新碟</text>
          <view class="title-divider"> | </view>
          <text @click="handleSwitchType(2)" :class="{ title: true, light: type === 1 }">新歌</text>
        </view>
        <wd-button class="btn" size="small" type="info" plain>
          <template v-if="type === 1">更多新碟</template>
          <template v-else>更多新歌</template>
        </wd-button>
      </view>
    </template>
    <template #content>
      <view class="item flex-column" v-for="item in currentAlbumList" :key="item.id">
        <image class="image" :src="item.picUrl" mode="heightFix" />
        <text class="name ellipsis">{{ item.name }}</text>
        <text class="artist-name ellipsis">{{ item.artist.name }}</text>
      </view>
    </template>
  </music-section>
</template>

<style lang="scss" src="./index.scss"></style>
