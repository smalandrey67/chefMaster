import { FC } from 'react'

import { 
    HeaderEl, 
    HeaderWrapper, 
    HeaderLogo, 
    HeaderBlogsWrapper, 
    HeaderBlogs, 
    HeaderFunctionality, 
    HeaderFavorites
} from './Header.styled'
import { Container } from '../../assets/styled/Reused.styled'

import { ImSpoonKnife } from 'react-icons/im'
import { IoBookSharp } from 'react-icons/io5'
import { RiNotification3Fill } from 'react-icons/ri'

import { Search } from '../Search/Search'

export const Header: FC = () => {

    return (
        <HeaderEl>
            <Container>
                <HeaderWrapper>
                    <HeaderBlogsWrapper>
                        <ImSpoonKnife size='25' />
                        <HeaderLogo to='/'>ChefMaster</HeaderLogo>
                    </HeaderBlogsWrapper>

                    <HeaderFunctionality>
                        <HeaderFavorites to='/favorites'>
                            <RiNotification3Fill cursor='pointer' size='25' />
                        </HeaderFavorites>

                        <HeaderBlogs to='/blogs'>
                            <IoBookSharp cursor='pointer' size='25' />
                        </HeaderBlogs>
                    </HeaderFunctionality>
                </HeaderWrapper>
                <Search />
            </Container>
        </HeaderEl>
    )
}