import { FC } from 'react'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { selectIsHamburgerMenu } from 'store/slices/filterSlice/filterSlice.selectors'
import { changeStatusOfHamburgerMenu } from 'store/slices/filterSlice/filterSlice'

import { Hamburger, HamburgerLine } from './HamburgerButton.styled'

export const HamburgerButton: FC = () => {
   const isHamburgerMenu = useAppSelector(selectIsHamburgerMenu)

   const dispatch = useAppDispatch()

   const hamburgerHandler = (): void => {
      dispatch(changeStatusOfHamburgerMenu())
   }

   return (
      <Hamburger isHamburgerMenu={isHamburgerMenu} onClick={hamburgerHandler}> 
         <HamburgerLine isHamburgerMenu={isHamburgerMenu}/>
      </Hamburger>
   )
}