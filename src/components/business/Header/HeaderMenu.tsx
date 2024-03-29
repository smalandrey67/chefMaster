import { FC } from 'react'

import { useAppSelector } from 'hooks/useRedux'
import { useOverflow } from 'hooks/useOverflow'
import { selectIsHamburgerMenu } from 'store/slices/filterSlice/filterSlice.selectors'

import * as ReusedStyle from 'assets/styled/Reused.styled'
import * as Style from './Header.styled'

import { BsFillPeopleFill, BsFillBasket3Fill, BsFillCalendarWeekFill } from 'react-icons/bs'
import { FaUserTie } from 'react-icons/fa'

export const HeaderMenu: FC = () => {
  const isHamburgerMenu = useAppSelector(selectIsHamburgerMenu)
  useOverflow(isHamburgerMenu)

  return (
    <Style.HeaderNav isHamburgerMenu={isHamburgerMenu}>
      <Style.HeaderList>
        <Style.HeaderItem>
          <BsFillBasket3Fill size='20' />
          <ReusedStyle.LinkEl fontSize='var(--fs-bg)' margin='0 0 0 10px' to='/favorites'>
            Favorites
          </ReusedStyle.LinkEl>
        </Style.HeaderItem>
        <Style.HeaderItem>
          <BsFillPeopleFill size='20' />
          <ReusedStyle.LinkEl fontSize='var(--fs-bg)' margin='0 0 0 10px' to='/blogs'>
            Blogs
          </ReusedStyle.LinkEl>
        </Style.HeaderItem>
        <Style.HeaderItem>
          <BsFillCalendarWeekFill size='20' />
          <ReusedStyle.LinkEl fontSize='var(--fs-bg)' margin='0 0 0 10px' to='/meal/plan'>
            Meal Plan
          </ReusedStyle.LinkEl>
        </Style.HeaderItem>
      </Style.HeaderList>
      <Style.HeaderHorizontalLine>
        <Style.HeaderList>
          <Style.HeaderItemProfile>
            <FaUserTie size='20' />
            <ReusedStyle.LinkEl fontSize='var(--fs-bg)' margin='0 0 0 10px' to='/profile'>
              Profile
            </ReusedStyle.LinkEl>
          </Style.HeaderItemProfile>
        </Style.HeaderList>
      </Style.HeaderHorizontalLine>
      <Style.HeaderVerticalLine />
    </Style.HeaderNav>
  )
}
