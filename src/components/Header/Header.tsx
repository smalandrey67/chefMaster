import { FC } from 'react'

import { HeaderEl, HeaderWrapper, HeaderLogo } from '../../styled/Basic/Header.styled'
import { Container } from '../../styled/Reused/Container.styled'

import { ImSpoonKnife } from 'react-icons/im'

import { Search } from '../Search/Search'

export const Header: FC = () => {
    return (
        <HeaderEl>
            <Container>
                <HeaderWrapper>
                    <HeaderLogo>
                        <ImSpoonKnife color="var(--color-black)" size="25" />
                        ChefMaster
                    </HeaderLogo>
                    <Search />
                </HeaderWrapper>
            </Container>
        </HeaderEl>
    )
}