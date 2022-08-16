import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from 'hooks/useRedux'
import { useOverflow } from 'hooks/useOverflow'
import { selectIsHamburgerMenu } from 'store/slices/filterSlice/filterSlice.selectors'
import { changeStatusOfHamburgerMenu } from 'store/slices/filterSlice/filterSlice'

import { HeaderNav, HeaderList, HeaderItem, HeaderItemProfile, 
HeaderLink, HeaderHorizontalLine, HeaderVerticalLine } from './Header.styled'

import { BsFillPeopleFill, BsFillBasket3Fill, BsFillCalendarWeekFill } from 'react-icons/bs'
import { FaUserTie } from 'react-icons/fa'

export const HeaderMenu: FC = () => {
   const isHamburgerMenu = useAppSelector(selectIsHamburgerMenu)
   
   const dispatch = useAppDispatch()
   const location = useLocation()
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
               <HeaderLink to='/favorites'>Favorites</HeaderLink>
            </HeaderItem>
            <HeaderItem>
               <BsFillPeopleFill size='20' />
               <HeaderLink to='/blogs'>Blogs</HeaderLink>
            </HeaderItem>
            <HeaderItem>
               <BsFillCalendarWeekFill size='20' />
               <HeaderLink to='/meal/plan'>Meal Plan</HeaderLink>
            </HeaderItem>
         </HeaderList>
         <HeaderHorizontalLine>
            <HeaderList>
               <HeaderItemProfile>
                  <FaUserTie size='20' />
                  <HeaderLink to='/profile'>Profile</HeaderLink>
               </HeaderItemProfile>
            </HeaderList>
         </HeaderHorizontalLine>
         <HeaderVerticalLine />
      </HeaderNav>
   )
}