import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HotAnchorWrapper } from './style'
import SectionHeaderV2 from '@/components/section-header-v2/SectionHeaderV2'
import { hotRadios } from '@/assets/data/local_data'
import { formatImageToSize } from '@/utils/format'
interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = memo((props: IProps) => {
  return (
    <HotAnchorWrapper>
      <SectionHeaderV2 title="热门主播" />
      <div className="hotdj-list">
        {hotRadios.map((item) => {
          return (
            <div className="hotdj-item" key={item.name}>
              <a href="" className="cover">
                <img src={formatImageToSize(item.picUrl, 40)} alt="" />
              </a>
              <div className="info">
                <p className="nickname">
                  <a href="">{item.name}</a>
                </p>
                <p className="position">{item.position}</p>
              </div>
            </div>
          )
        })}
      </div>
    </HotAnchorWrapper>
  )
})

HotAnchor.displayName = 'HotAnchor'
export default HotAnchor
