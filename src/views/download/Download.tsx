import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = memo((props: IProps) => {
  return (
    <div>
      <h2>Download</h2>
    </div>
  )
})

Download.displayName = 'Download'
export default Download
