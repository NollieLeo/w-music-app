import { computed } from 'vue'
import { useRequest } from 'vue-request'
import { getAlbumNewest } from '@/apis'

export const useAlbumNewest = () => {
  const { data, ...rest } = useRequest(getAlbumNewest)

  const albumNewestList = computed(() => {
    return data.value?.albums || []
  })

  return {
    ...rest,
    albumNewestList,
  }
}
