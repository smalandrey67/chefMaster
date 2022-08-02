import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from 'hooks/useRedux'
import { useOverflow } from 'hooks/useOverflow'
import { selectFilterState, changeStatusOfHamburgerMenu } from 'store/slices/filterSlice'

import { HeaderNav, HeaderList, HeaderItem, HeaderLink, HeaderLine, HeaderVerticalLine } from './Header.styled'

import { BsFillPeopleFill, BsFillBasket3Fill } from 'react-icons/bs'

export const HeaderMenu: FC = () => {
   const { isHamburgerMenu } = useAppSelector(selectFilterState)
   useOverflow(isHamburgerMenu)

   const dispatch = useAppDispatch()
   const location = useLocation()

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
         </HeaderList>
         <HeaderLine />
         <HeaderVerticalLine />
      </HeaderNav>
   )
}