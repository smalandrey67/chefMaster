import { FC } from 'react'

import { HeaderEl, HeaderLogo } from '../../styled/Basic/HeaderEl.styled'
import { Container } from '../../styled/Reused/Container.styled'
import { Flex } from '../../styled/Reused/Flex.styled'

import { ImSpoonKnife } from 'react-icons/im'

import { Search } from '../Search/Search'

export const Header: FC = () => {
    return (
        <HeaderEl>
            <Container>
                <Flex align="center" justify="space-between">

                    <HeaderLogo>
                        <ImSpoonKnife color="var(--color-black)"/>
                        ChefMaster
                    </HeaderLogo>

                    <Search />
                    
                </Flex>
            </Container> 
        </HeaderEl>
    )
}