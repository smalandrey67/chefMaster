import { FC } from 'react'
import { ImSpoonKnife } from 'react-icons/im'

import * as Style from './Header.styled'
import * as ReusedStyle from 'assets/styled/Reused.styled'

import { Search } from 'components/business/Search/Search'
import { HamburgerButton } from './HamburgerButton'
import { HeaderMenu } from './HeaderMenu'

import { useClosePopups } from 'hooks/useClosePopups'

export const Header: FC = () => {
  useClosePopups()

  return (
    <Style.HeaderEl>
      <ReusedStyle.Container>
        <Style.HeaderWrapper>
          <Style.HeaderLogoWrapper>
            <ImSpoonKnife size='25' />
            <ReusedStyle.LinkEl margin='0 0 0 5px' fontSize='var(--fs-bg)' fontWeight='var(--fw-bold)' to='/'>
              ChefMaster
            </ReusedStyle.LinkEl>
          </Style.HeaderLogoWrapper>

          <HamburgerButton />
          <HeaderMenu />
        </Style.HeaderWrapper>
        <Search />
      </ReusedStyle.Container>
    </Style.HeaderEl>
  )
}
