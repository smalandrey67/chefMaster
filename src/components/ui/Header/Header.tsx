import { FC } from 'react'
import { useAppSelector } from '../../../hooks/useRedux'

import { 
    HeaderEl, 
    HeaderWrapper, 
    HeaderLogo, 
    HeaderBlogsWrapper, 
    HeaderBlogs, 
    HeaderFunctionality, 
    HeaderFavorites,
    HeaderFavoritesCount,
    HeaderFavoritesImage
} from './Header.styled'
import { Container } from '../../../assets/styled/Reused.styled'

import { ImSpoonKnife } from 'react-icons/im'
import { BsFillPeopleFill } from 'react-icons/bs'

import { Search } from '../Search/Search'

import Basket from '../../../assets/images/basket.svg'

export const Header: FC = () => {
    const { favorites } = useAppSelector(state => state.favorites)

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
                            <HeaderFavoritesImage src={Basket} alt='basket' />
                            {
                                favorites.length ? <HeaderFavoritesCount>
                                    {favorites.length}
                                </HeaderFavoritesCount> : null
                            }
                        </HeaderFavorites>

                        <HeaderBlogs to='/blogs'>
                            <BsFillPeopleFill cursor='pointer' size='30' />
                        </HeaderBlogs>
                    </HeaderFunctionality>
                </HeaderWrapper>
                <Search />
            </Container>
        </HeaderEl>
    )
}