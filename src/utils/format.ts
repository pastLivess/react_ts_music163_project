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
  return imageUrl + `?param=${width}y${height}`
}

export function formatTime(time: any) {
  const timeSecond = time / 1000
  const minute = Math.floor(timeSecond / 60)
  const second = Math.floor(timeSecond) % 60

  // formatMinute
  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')
  return `${formatMinute}:${formatSecond}`
}
