import hyRequest from '../..'

export function getBanners() {
  return hyRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 8) {
  return hyRequest.get({
    url: `/personalized`,
    params: { limit }
  })
}
export function getNewAlbum(limit = 10) {
  return hyRequest.get({
    url: '/album/newest',
    params: { limit }
  })
}
export function getPlaylistDetail(id: number) {
  return hyRequest.get({
    url: '/playlist/detail',
    params: { id }
  })
}
// 入住歌手(热门歌手)
export function getArtistList(limit = 5) {
  return hyRequest.get({
    url: '/top/artists',
    params: { limit }
  })
}
