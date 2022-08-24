import { FC } from 'react'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { selectIsHamburgerMenu } from 'store/slices/filterSlice/filterSlice.selectors'
import { changeStatusOfHamburgerMenu } from 'store/slices/filterSlice/filterSlice'

import { Hamburger, HamburgerLine } from './Header.styled'

export const HamburgerButton: FC = () => {
   const dispatch = useAppDispatch()
   const isHamburgerMenu = useAppSelector(selectIsHamburgerMenu)

   const hamburgerHandler = (): void => {
      dispatch(changeStatusOfHamburgerMenu())
   }

   return (
      <Hamburger onClick={hamburgerHandler} isHamburgerMenu={isHamburgerMenu}>
         <HamburgerLine isHamburgerMenu={isHamburgerMenu} />
      </Hamburger>
   )
}