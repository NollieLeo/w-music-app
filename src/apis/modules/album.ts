import { http } from '../utils'

const ALBUM_PREFIX = '/album'

export interface AlbumNewestArtist {
  img1v1Id: number
  topicPerson: number
  musicSize: number
  albumSize: number
  picId: number
  picUrl: string
  img1v1Url: string
  followed: boolean
  trans: string
  name: string
  id: number
  img1v1Id_str: string
}

export interface AlbumNewest {
  songs: Array<unknown>
  paid: boolean
  onSale: boolean
  mark: number
  publishTime: number
  company: string
  artists: AlbumNewestArtist[]
  copyrightId: number
  picId: number
  artist: AlbumNewestArtist
  picUrl: string
  commentThreadId: string
  blurPicUrl: string
  companyId: number
  pic: number
  status: number
  subType: string
  description: string
  tags: string
  name: string
  id: number
  type: string
  size: number
  picId_str: string
}

interface GetAlbumNewestResponseData {
  total: number
  albums: AlbumNewest[]
}

export const getAlbumNewest = (data: any) => {
  return http<GetAlbumNewestResponseData>({
    url: `${ALBUM_PREFIX}/newest`,
    method: 'GET',
    data,
  })
}
