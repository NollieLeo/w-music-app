import { http } from '@/apis/utils'

export interface Banner {
  imageUrl: string
  targetId: number
  adid: string | null
  targetType: 3000
  titleColor: 'blue'
  typeTitle: string
  url: string
  exclusive: boolean
  monitorImpress: null
  monitorClick: null
  monitorType: null
  monitorImpressList: null
  monitorClickList: null
  monitorBlackList: null
  extMonitor: null
  extMonitorInfo: null
  adSource: null
  adLocation: null
  adDispatchJson: null
  encodeId: string
  program: null
  event: null
  video: null
  song: null
  scm: string
  bannerBizType: 'force_banner'
}

export const getBanner = (data: any) => {
  return http<{
    banners: Banner[]
    code: number
  }>({
    url: '/banner',
    method: 'GET',
    data,
  })
}
