import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HotAnchorWrapper } from './style'
import SectionHeaderV2 from '@/components/section-header-v2/SectionHeaderV2'
interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = memo((props: IProps) => {
  return (
    <HotAnchorWrapper>
      <SectionHeaderV2 title="热门主播" />
      <h2>HotAnchor</h2>
    </HotAnchorWrapper>
  )
})

HotAnchor.displayName = 'HotAnchor'
export default HotAnchor
