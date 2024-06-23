import type { HttpResponseData } from '../types'
import { http } from '../utils'

const PERSONALIZED_PREFIX = '/personalized'

export interface Personalized {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

export type GetPersonalizedResponseData = HttpResponseData<{
  hasTaste: boolean
  category: number
  result: Array<Personalized>
}>

export const getPersonalized = (data: any) => {
  return http<GetPersonalizedResponseData>({
    url: PERSONALIZED_PREFIX,
    method: 'GET',
    data,
  })
}
