import { FC } from 'react'

import { HeaderEl, HeaderWrapper, HeaderLogo, HeaderBlogsWrapper, HeaderBlogs, HeaderFunctionality, HeaderFavorites, 
    HeaderFavoritesCount,
    HeaderFavoritesImage,
    HeaderList,
    HeaderItem
} from './Header.styled'

import Basket from '../../../assets/images/icons/basket.svg'
import { Container } from '../../../assets/styled/Reused.styled'

import { ImSpoonKnife } from 'react-icons/im'
import { BsFillPeopleFill } from 'react-icons/bs'

import { Search } from '../Search/Search'
import { useAppSelector } from '../../../hooks/useRedux'
import { selectFavorites } from '../../../store/slices/favoritesSlice'

export const Header: FC = () => {
    const favorites = useAppSelector(selectFavorites)

    return (
        <HeaderEl>
            <Container>
                <HeaderWrapper>
                    <HeaderBlogsWrapper>
                        <ImSpoonKnife size='25' />
                        <HeaderLogo to='/'>ChefMaster</HeaderLogo>
                    </HeaderBlogsWrapper>

                    <HeaderFunctionality>
                        <HeaderList>
                            <HeaderItem>
                                <HeaderFavorites aria-label='favorites basket' to='/favorites'>
                                    <HeaderFavoritesImage src={Basket} alt='basket' />
                                    {favorites.length ? <HeaderFavoritesCount>
                                        {favorites.length}
                                    </HeaderFavoritesCount> : null}
                                </HeaderFavorites>
                            </HeaderItem> 

                            <HeaderItem>
                                <HeaderBlogs aria-label='blogs' to='/blogs'>
                                    <BsFillPeopleFill cursor='pointer' size='30' />
                                </HeaderBlogs>
                            </HeaderItem> 
                        </HeaderList>
                    </HeaderFunctionality>
                </HeaderWrapper>
                <Search />
            </Container>
        </HeaderEl>
    )
}