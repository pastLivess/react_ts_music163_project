import hyRequest from '@/services'
import React, { memo, useEffect, useState } from 'react'
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
  const [banners, setBanners] = useState<IBannerData[]>([])

  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
        console.log(res)
      })
  }, [])
  return (
    <div>
      <h2>Recommend</h2>
    </div>
  )
})

Recommend.displayName = 'Recommend'
export default Recommend
