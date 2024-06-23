import { getBanner } from '@/apis'
import { map } from 'lodash-es'
import { computed } from 'vue'
import { useRequest } from 'vue-request'

export const useBanners = () => {
  const { data, ...rest } = useRequest(getBanner)

  const bannerList = computed(() => {
    if (data.value?.banners) {
      return map(data.value?.banners, ({ imageUrl, ...rest }) => ({
        ...rest,
        value: imageUrl,
      }))
    }
    return []
  })

  return {
    ...rest,
    bannerList,
  }
}
