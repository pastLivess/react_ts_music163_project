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
