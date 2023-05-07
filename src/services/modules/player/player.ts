import hyRequest from '@/services'

// 获取当前歌曲
export function getSongDetail(ids: number) {
  return hyRequest.get({
    url: '/song/detail',
    params: { ids }
  })
}

// 获取当前歌词
export function getSongLyric(id: number) {
  return hyRequest.get({
    url: '/lyric',
    params: { id }
  })
}
