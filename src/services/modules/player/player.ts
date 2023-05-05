import hyRequest from '@/services'

export function getSongUrl(id: number) {
  return hyRequest.get({
    url: '/song/url/v1',
    params: { id }
  })
}
