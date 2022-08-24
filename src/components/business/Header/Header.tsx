import { FC } from 'react'
import { ImSpoonKnife } from 'react-icons/im'

import { LinkEl } from 'assets/styled/Reused.styled'
import { HeaderEl, HeaderWrapper, HeaderLogoWrapper } from './Header.styled'
import { Container } from 'assets/styled/Reused.styled'

import { Search } from '../Search/Search'
import { HamburgerButton } from './HamburgerButton'
import { HeaderMenu } from './HeaderMenu'

export const Header: FC = () => {

    return (
        <HeaderEl>
            <Container>
                <HeaderWrapper>
                    <HeaderLogoWrapper>
                        <ImSpoonKnife size='25' />
                        <LinkEl
                            margin='0 0 0 5px'
                            fontSize='var(--fs-bg)'
                            fontWeight='var(--fw-bold)'
                            to='/'
                        >ChefMaster</LinkEl>
                    </HeaderLogoWrapper>

                    <HamburgerButton />
                    <HeaderMenu />
                </HeaderWrapper>
                <Search />
            </Container>
        </HeaderEl>
    )
}