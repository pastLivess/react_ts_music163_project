export interface ILyrics {
  time: number
  text: string
}
// 处理时间的正则表达式
// [02:00.10]凭什么妥协
// ()表示分组
// \d{2} 匹配2位
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricString: string) {
  // 1.拿到每一行的歌词
  const lines: string[] = lyricString.split('\n')

  //  解析后的歌词
  const lyrics: ILyrics[] = []
  // 2.对每句歌词进行解析为对象类型
  for (const line of lines) {
    // 1.匹配结果
    const result = timeRegExp.exec(line)
    if (!result) continue
    // 2.获取每次数据
    const time1 = +result[1] * 60 * 1000
    const time2 = +result[2] * 1000
    const time3 = result[3].length === 2 ? +result[3] * 10 : +result[3]
    const time = time1 + time2 + time3
    // 3.获取每一组文本
    const text = line.replace(timeRegExp, '')

    lyrics.push({ time, text })
  }

  return lyrics
}
