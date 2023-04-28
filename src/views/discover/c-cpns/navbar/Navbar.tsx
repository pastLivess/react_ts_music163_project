import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { NavbarWrapper } from './stlye'
import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const Navbar: FC<IProps> = memo((props: IProps) => {
  return (
    <NavbarWrapper>
      <div className="nav">
        {discoverMenu.map(({ title, link }) => {
          return (
            <div className="item" key={title}>
              <NavLink to={link}>{title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavbarWrapper>
  )
})

Navbar.displayName = 'Navbar'
export default Navbar
