import { FC } from 'react'

import { HeaderEl, HeaderWrapper, HeaderLogo, HeaderBlogs } from './Header.styled'
import { Container } from '../../styled/Reused.styled'

import { ImSpoonKnife } from 'react-icons/im'
import { IoBookSharp } from 'react-icons/io5'

import { Search } from '../Search/Search'

export const Header: FC = () => {

    return (
        <HeaderEl>
            <Container>
                <HeaderWrapper>

                    <HeaderLogo>
                        <ImSpoonKnife size='25' />
                        ChefMaster
                    </HeaderLogo>

                    <HeaderBlogs>
                        <IoBookSharp cursor='pointer' size='25' />
                    </HeaderBlogs>

                </HeaderWrapper>
                <Search />
            </Container>
        </HeaderEl>
    )
}