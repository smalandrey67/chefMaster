import { FC } from 'react'
import { ImSpoonKnife } from 'react-icons/im'

import { LinkEl } from 'assets/styled/Reused.styled'
import * as Style from './Header.styled'
import { Container } from 'assets/styled/Reused.styled'

import { Search } from '../Search/Search'
import { HamburgerButton } from './HamburgerButton'
import { HeaderMenu } from './HeaderMenu'

import { useClosePopups } from 'hooks/useClosePopups'

export const Header: FC = () => {
  useClosePopups()

  return (
    <Style.HeaderEl>
      <Container>
        <Style.HeaderWrapper>
          <Style.HeaderLogoWrapper>
            <ImSpoonKnife size='25' />
            <LinkEl margin='0 0 0 5px' fontSize='var(--fs-bg)' fontWeight='var(--fw-bold)' to='/'>
              ChefMaster
            </LinkEl>
          </Style.HeaderLogoWrapper>

          <HamburgerButton />
          <HeaderMenu />
        </Style.HeaderWrapper>
        <Search />
      </Container>
    </Style.HeaderEl>
  )
}
