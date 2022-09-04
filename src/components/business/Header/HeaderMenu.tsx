import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from 'hooks/useRedux'
import { useOverflow } from 'hooks/useOverflow'
import { selectIsHamburgerMenu } from 'store/slices/filterSlice/filterSlice.selectors'
import { changeStatusOfHamburgerMenu } from 'store/slices/filterSlice/filterSlice'

import { LinkEl } from 'assets/styled/Reused.styled'
import {
   HeaderNav, HeaderList, HeaderItem, HeaderItemProfile,
   HeaderHorizontalLine, HeaderVerticalLine
} from './Header.styled'

import { BsFillPeopleFill, BsFillBasket3Fill, BsFillCalendarWeekFill } from 'react-icons/bs'
import { FaUserTie } from 'react-icons/fa'

export const HeaderMenu: FC = () => {
   const dispatch = useAppDispatch()
   const location = useLocation()

   const isHamburgerMenu = useAppSelector(selectIsHamburgerMenu)
   useOverflow(isHamburgerMenu)
   
   useEffect(() => {
      if (isHamburgerMenu) {
         dispatch(changeStatusOfHamburgerMenu())
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch, location])

   return (
      <HeaderNav isHamburgerMenu={isHamburgerMenu}>
         <HeaderList>
            <HeaderItem>
               <BsFillBasket3Fill size='20' />
               <LinkEl fontSize='var(--fs-bg)' margin='0 0 0 10px' to='/favorites'>Favorites</LinkEl>
            </HeaderItem>
            <HeaderItem>
               <BsFillPeopleFill size='20' />
               <LinkEl fontSize='var(--fs-bg)' margin='0 0 0 10px' to='/blogs'>Blogs</LinkEl>
            </HeaderItem>
            <HeaderItem>
               <BsFillCalendarWeekFill size='20' />
               <LinkEl fontSize='var(--fs-bg)' margin='0 0 0 10px' to='/meal/plan'>Meal Plan</LinkEl>
            </HeaderItem>
         </HeaderList>
         <HeaderHorizontalLine>
            <HeaderList>
               <HeaderItemProfile>
                  <FaUserTie size='20' />
                  <LinkEl fontSize='var(--fs-bg)' margin='0 0 0 10px' to='/profile'>Profile</LinkEl>
               </HeaderItemProfile>
            </HeaderList>
         </HeaderHorizontalLine>
         <HeaderVerticalLine />
      </HeaderNav>
   )
}