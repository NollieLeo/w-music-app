<script setup lang="ts"></script>

<template>
  <view class="section flex-colum">
    <view class="section-header">
      <slot name="header"></slot>
    </view>
    <scroll-view class="section-content flex-row" scroll-x>
      <slot name="content"></slot>
    </scroll-view>
  </view>
</template>

<style lang="scss" src="./index.scss"></style>
