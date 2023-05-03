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
