import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>Ranking</h2>
    </div>
  )
})

Ranking.displayName = 'Ranking'
export default Ranking
