import { defineStore } from 'pinia'
import { ref } from 'vue'
import { USER_STORE_KEY } from '../constants'

// 定义 Store
export const useUserStore = defineStore(
  USER_STORE_KEY,
  () => {
    // 用户信息
    const userInfo = ref<any>()

    // 保存用户信息，登录时使用
    const setUserInfo = (val: any) => {
      userInfo.value = val
    }

    // 清理用户信息，退出时使用
    const clearUserInfo = () => {
      userInfo.value = undefined
    }

    return {
      userInfo,
      setUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: {
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        },
      },
    },
  },
)
