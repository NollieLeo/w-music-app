import { getPersonalized } from '@/apis/modules/personalized'
import { floor, map, toString } from 'lodash-es'
import { computed } from 'vue'
import { useRequest } from 'vue-request'
import type { PersonalizedTransformed } from '../types'

export const usePersonalized = () => {
  const { data, ...rest } = useRequest(getPersonalized)

  const formatCount = (count: number) => {
    if (count >= 10000) {
      return `${floor(count / 10000, 1)}万`
    }
    return toString(count)
  }

  const personalizedList = computed<PersonalizedTransformed[]>(() => {
    return map(data.value?.result, (item) => {
      const formatedCount = formatCount(item.playCount)
      return {
        ...item,
        formatedCount,
      }
    })
  })

  return {
    ...rest,
    personalizedList,
  }
}
