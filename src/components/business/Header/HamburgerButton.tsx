import { FC } from 'react'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { selectIsHamburgerMenu } from 'store/slices/filterSlice/filterSlice.selectors'
import { changeStatusOfHamburgerMenu } from 'store/slices/filterSlice/filterSlice'

import * as Style from './Header.styled'

export const HamburgerButton: FC = () => {
  const dispatch = useAppDispatch()
  const isHamburgerMenu = useAppSelector(selectIsHamburgerMenu)

  const hamburgerHandler = (): void => {
    dispatch(changeStatusOfHamburgerMenu())
  }

  return (
    <Style.Hamburger onClick={hamburgerHandler} isHamburgerMenu={isHamburgerMenu}>
      <Style.HamburgerLine isHamburgerMenu={isHamburgerMenu} />
    </Style.Hamburger>
  )
}
