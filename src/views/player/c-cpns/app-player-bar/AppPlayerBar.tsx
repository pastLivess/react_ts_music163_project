import React, { memo, useState, useRef, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import {
  AppPlayBarWrapper,
  PlayBarControlWrapper,
  PlayBarInfoWrapper,
  PlayBarOperatorWrapper
} from './style'
import { useAppDispatch, useAppSelector } from '@/hooks/types/app'
import { shallowEqual } from 'react-redux'
import { formatImageToSize, formatTime } from '@/utils/format'
import { Slider, message } from 'antd'
import { getSongUrl } from '@/services/modules/player'
import { changeCurrentSongLyricIndexAction } from '@/store/modules/player'

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = memo(() => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const dispatch = useAppDispatch()
  // 播放控件
  const [isPlaying, setIsPlaying] = useState(false)
  // 进度条 播放的时间
  const [progress, setProgress] = useState(0)
  // 总时间
  const [duration, setDuration] = useState(0)
  // 当前播放的时间
  const [currentTime, setCurrentTime] = useState(0)
  // 记录拖拽情况
  const [isSliderChange, setIsSliderChange] = useState(false)
  const { currentSong, currentSongLyric, currentSongLyricIndex } =
    useAppSelector(
      (state) => ({
        currentSong: state.player.currentSong,
        currentSongLyric: state.player.currentSongLyric,
        currentSongLyricIndex: state.player.currentSongLyricIndex
      }),
      shallowEqual
    )
  useEffect(() => {
    getSongUrl(currentSong.id).then((res) => {
      audioRef.current!.src = res.data[0].url
    })
    //获取音乐总时长
    setDuration(currentSong.dt)
  }, [currentSong])
  // 音乐播放的回调
  function handlerTimeUpDate() {
    // 获取当前的播放时间
    const currentTime = audioRef.current!.currentTime
    // console.log(currentTime)

    //音乐总时间
    // 当前歌曲进度
    // 如果为false才去计算当前的进度条和剩余时间,
    // 而我们拖动进度条会设置为true,这里就不会生效了,然后结束的时候设置回false
    if (!isSliderChange) {
      const progress = ((currentTime * 1000) / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime * 1000)
    }
    setIsSliderChange(false)
    let index = currentSongLyric.length - 1
    for (let i = 0; i < currentSongLyric.length; i++) {
      const lyric = currentSongLyric[i]
      // 如果那一句歌词大于我们当前播放时的这个时间
      // 就找到这个index了是当前这一个大于的前一个索引位置
      if (lyric.time > currentTime * 1000) {
        index = i - 1
        break
      }
    }
    // 匹配上歌词的索引后,保存起来即可,不要在匹配了,节约性能
    if (currentSongLyricIndex === index || index === -1) return
    dispatch(changeCurrentSongLyricIndexAction(index))
    // 展示歌词的antd组件
    message.open({
      content: currentSongLyric[index]?.text,
      key: 'lyric',
      duration: 0
    })
    // console.log(currentSongLyric[index]?.text)
  }
  function handlerPlayBtnClick(e: any) {
    e.preventDefault()
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    // 改变状态
    setIsPlaying(!isPlaying)
  }

  // 点击进度条之后触发的函数
  function handlerSliderAfterChange(value: number) {
    const currentTime = (value / 100) * duration
    audioRef.current!.currentTime = currentTime / 1000
    setCurrentTime(currentTime)
    setProgress(value)
    // console.log(value)
  }
  // 拖动进度条触发的回调
  function handlerSliderOnChange(value: number) {
    // 用于记录拖动时影响当前位置的时间
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
    /* 用于记录否则播放音乐时,进度条在播放会一直往前移动 */
    setIsSliderChange(true)
    setProgress(value) /* 修改当前进度条 */
    // console.log(value)
  }
  return (
    <AppPlayBarWrapper>
      <div className="playbar">
        <div className="updn">
          <div className="left sprite_playbar">
            <a href="" className="btn sprite_playbar"></a>
          </div>
          <div className="right sprite_playbar"></div>
        </div>
        <div className="bg sprite_playbar"></div>
        <div className="wrap">
          <PlayBarControlWrapper isPlaying={isPlaying}>
            <div className="btns">
              <a href="" title="上一首" className="prev sprite_playbar">
                上一首
              </a>
              <a
                href="#"
                onClick={(e) => handlerPlayBtnClick(e)}
                title="播放/暂停"
                className="play sprite_playbar"
              >
                播放/暂停
              </a>
              <a href="" title="下一首" className="next sprite_playbar">
                下一首
              </a>
            </div>
          </PlayBarControlWrapper>
          <PlayBarInfoWrapper>
            <div className="head">
              <img
                src={formatImageToSize(currentSong?.al?.picUrl, 34)}
                alt=""
              />
              <a href="#!" className="sprite_playbar"></a>
            </div>
            <div className="play">
              <div className="words">
                <a
                  href="/"
                  title={currentSong?.al?.name}
                  className="music-name"
                >
                  {currentSong?.name}
                </a>
                <span className="artist-name" title={currentSong?.ar?.name}>
                  <a href="">{currentSong?.ar?.[0]?.name}</a>
                </span>
                <a
                  href="#!"
                  className="src sprite_playbar"
                  title="来自歌单"
                ></a>
              </div>
              <div className="pbar">
                <Slider
                  value={progress}
                  step={0.7}
                  tooltip={{ formatter: null }}
                  onAfterChange={handlerSliderAfterChange}
                  onChange={handlerSliderOnChange}
                />
                <div className="time">
                  <span className="current">{formatTime(currentTime)}</span>
                  <em>/</em>
                  <span className="duration">{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </PlayBarInfoWrapper>
          <PlayBarOperatorWrapper>
            <div className="operator">
              <a href="" title="画中画歌词" className="icon pip">
                画中画歌词
              </a>
              <a href="" title="收藏" className="icon like sprite_playbar">
                收藏
              </a>
              <a href="" title="分享" className="icon share sprite_playbar">
                分享
              </a>
            </div>
            <div className="control">
              <div className="m-vol"></div>
              <a href="" className="icon volume sprite_playbar"></a>
              <a
                href=""
                className="icon mode sprite_playbar"
                title="单曲循环"
              ></a>
              <span className="add f-pr">
                <span className="tip sprite_playbar">已添加到播放列表</span>
                <a href="" title="播放列表" className="sprite_playbar">
                  20
                </a>
              </span>
              <div className="tip tip-1 sprite_playbar">单曲循环</div>
            </div>
          </PlayBarOperatorWrapper>
        </div>
      </div>

      <audio ref={audioRef} onTimeUpdate={handlerTimeUpDate} loop={true} />
    </AppPlayBarWrapper>
  )
})

PlayerBar.displayName = 'PlayerBar'
export default PlayerBar
