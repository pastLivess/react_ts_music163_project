import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const DjRadio: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>DjRadio</h2>
    </div>
  )
})

DjRadio.displayName = 'DjRadio'
export default DjRadio
