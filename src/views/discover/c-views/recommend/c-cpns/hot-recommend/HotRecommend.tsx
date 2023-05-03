import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HotRecommendWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1/SectionHeaderV1'
interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = memo((props: IProps) => {
  return (
    <HotRecommendWrapper>
      <SectionHeaderV1 />
    </HotRecommendWrapper>
  )
})

HotRecommend.displayName = 'HotRecommend'
export default HotRecommend
