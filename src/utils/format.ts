export function formatCount(count: number) {
  if (count > 100000000) {
    return Math.floor(count / 100000000) + '亿'
  } else if (count > 100000) {
    return Math.floor(count / 100000) + '万'
  } else return count
}
// 格式化图片
export function formatImageToSize(
  imageUrl: string,
  width: number,
  height = width
) {
  return imageUrl + `?param=${width}x${height}`
}
