import { useAppDispatch, useAppSelector } from '@/hooks/types/app'
import {
  fetchBannerDataAction,
  fetchHotRecommendAction
} from '@/store/modules/discover/recommend'
import React, { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import TopBanner from './c-cpns/top-banner/TopBanner'
import { shallowEqual } from 'react-redux'
import {
  RecommendLeftWrapper,
  RecommendRightWrapper,
  RecommendWrapper
} from './style'
import HotRecommend from './c-cpns/hot-recommend/HotRecommend'
import NewAlbum from './c-cpns/new-album/NewAlbum'
interface IProps {
  children?: ReactNode
}

export interface IBannerData {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  exclusive: boolean
  encodeId: string
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = memo(() => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
  }, [])
  return (
    <div>
      <TopBanner banners={banners} />
      <RecommendWrapper>
        <div className="main">
          <RecommendLeftWrapper>
            <div className="wrapv1">
              <HotRecommend />
              <NewAlbum />
            </div>
          </RecommendLeftWrapper>
          <RecommendRightWrapper>right</RecommendRightWrapper>
        </div>
      </RecommendWrapper>
    </div>
  )
})

Recommend.displayName = 'Recommend'
export default Recommend
