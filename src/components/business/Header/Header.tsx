import { FC } from 'react'

import { HeaderEl, HeaderWrapper, HeaderLogo, HeaderBlogsWrapper } from './Header.styled'

import { Container } from 'assets/styled/Reused.styled'
import { ImSpoonKnife } from 'react-icons/im'

import { Search } from '../Search/Search'
import { HamburgerButton } from 'components/reusable/HamburgerButton/HamburgerButton'
import { HeaderMenu } from './HeaderMenu'

export const Header: FC = () => {
    
    return (
        <HeaderEl>
            <Container>
                <HeaderWrapper>
                    <HeaderBlogsWrapper>
                        <ImSpoonKnife size='25' />
                        <HeaderLogo to='/'>ChefMaster</HeaderLogo>
                    </HeaderBlogsWrapper>
                    <HamburgerButton />
                    <HeaderMenu />
                </HeaderWrapper>
                <Search />
            </Container>
        </HeaderEl>
    )
}