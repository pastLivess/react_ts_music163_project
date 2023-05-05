import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { PlayerWrapper } from './style'
import PlayerBar from './c-cpns/app-player-bar/AppPlayerBar'
interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = memo((props: IProps) => {
  return (
    <PlayerWrapper>
      <h2>Player</h2>
    </PlayerWrapper>
  )
})

Player.displayName = 'Player'
export default Player
