import { FC } from 'react'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { selectFilterState } from 'store/slices/filterSlice'
import { changeStatusOfHamburgerMenu } from 'store/slices/filterSlice'

import { Hamburger } from './HamburgerButton.styled'

export const HamburgerButton: FC = () => {
   const { isHamburgerMenu } = useAppSelector(selectFilterState)
   const dispatch = useAppDispatch()

   const hamburgerHandler = (): void => {
      dispatch(changeStatusOfHamburgerMenu())
   }

   return (
      <Hamburger
         isHamburgerMenu={isHamburgerMenu}
         onClick={hamburgerHandler}
      />
   )
}