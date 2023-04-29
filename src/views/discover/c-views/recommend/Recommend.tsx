import { useAppDispatch, useAppSelector } from '@/hooks/types/app'
import { fetchBannerDataAction } from '@/store/modules/discover/recommend'
import React, { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import TopBanner from './c-cpns/top-banner/TopBanner'
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
  const { banners } = useAppSelector((state) => ({
    banners: state.recommend.banners
  }))
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <div>
      <TopBanner banners={banners} />
      <h2>Recommend</h2>
    </div>
  )
})

Recommend.displayName = 'Recommend'
export default Recommend
