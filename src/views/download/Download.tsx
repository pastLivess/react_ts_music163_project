import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  name: string
  age: number
  children?: ReactNode
}

const Download: React.FC<IProps> = memo(({ name, age, children }: IProps) => {
  return (
    <div>
      <h2>Download</h2>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{children}</h2>
    </div>
  )
})

Download.displayName = 'Download'
export default Download
