import { FC } from 'react'

import { HeaderEl, HeaderWrapper, HeaderLogo, HeaderBlogsWrapper, HeaderBlogs } from './Header.styled'
import { Container } from '../../assets/styled/Reused.styled'

import { ImSpoonKnife } from 'react-icons/im'
import { IoBookSharp } from 'react-icons/io5'

import { Search } from '../Search/Search'

export const Header: FC = () => {

  

    return (
        <HeaderEl>
            <Container>
                <HeaderWrapper>

                    <HeaderBlogsWrapper>
                        <ImSpoonKnife size='25' />
                        <HeaderLogo>ChefMaster</HeaderLogo>
                    </HeaderBlogsWrapper>

                    <HeaderBlogs>
                        <IoBookSharp cursor='pointer' size='25' />
                    </HeaderBlogs>
                
                </HeaderWrapper>
                <Search />
            </Container>
        </HeaderEl>
    )
}