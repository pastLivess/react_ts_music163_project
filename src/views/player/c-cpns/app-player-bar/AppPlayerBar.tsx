import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { AppPlayBarWrapper } from './style'
interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = memo((props: IProps) => {
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
          <div className="btns">
            <a href="" title="上一首" className="prev sprite_playbar">
              上一首
            </a>
            <a href="" title="播放/暂停" className="play sprite_playbar">
              播放/暂停
            </a>
            <a href="" title="下一首" className="next sprite_playbar">
              下一首
            </a>
          </div>
          <div className="head">
            <img
              src="https://p3.music.126.net/CpwIPy2YUWC6ksF88eGNyw==/109951162931819035.jpg?param=34y34"
              alt=""
            />
            <a href="" className="sprite_playbar"></a>
          </div>
          <div className="play">
            <div className="words">
              <a href="" title="椿" className="music-name">
                椿
              </a>
              <span className="artist-name" title="沈以诚">
                <a href="">沈以诚</a>
              </span>
              <a href="" className="src sprite_playbar" title="来自歌单"></a>
            </div>
            <div className="pbar">
              <div className="barbg">
                <div className="rdy"></div>
                <div className="cur">
                  <span className="btn">
                    <i></i>
                  </span>
                </div>
              </div>
              <div className="time">
                <span className="current">00:00</span>
                <em>/</em>
                <span className="count">00:00</span>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </AppPlayBarWrapper>
  )
})

PlayerBar.displayName = 'PlayerBar'
export default PlayerBar
