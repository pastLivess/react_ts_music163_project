import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { SettleSingerWrapper } from './style'
import SectionHeaderV2 from '@/components/section-header-v2/SectionHeaderV2'
interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = memo((props: IProps) => {
  return (
    <SettleSingerWrapper>
      <SectionHeaderV2
        title="入驻歌手"
        moreText="查看更多&gt;"
        moreLink="/discover/artist/signed"
      />
      <h2>SettleSinger</h2>
    </SettleSingerWrapper>
  )
})

SettleSinger.displayName = 'SettleSinger'
export default SettleSinger
