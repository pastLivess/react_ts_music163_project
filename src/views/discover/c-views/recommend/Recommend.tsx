import { useAppDispatch } from '@/hooks/types/app'
import { fetchBannerDataAction } from '@/store/modules/discover/recommend'
import React, { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
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

const Recommend: FC<IProps> = memo((props: IProps) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <div>
      <h2>Recommend</h2>
    </div>
  )
})

Recommend.displayName = 'Recommend'
export default Recommend
