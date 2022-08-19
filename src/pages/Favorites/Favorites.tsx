import { FC } from 'react'

import { RecipesWrapper, Title } from 'assets/styled/Reused.styled'

import { useAppSelector } from 'hooks/useRedux'
import { selectFavorites } from 'store/slices/favoriteSlice/favoriteSlice.selectors'

import { FavoritesType } from 'types/Favorites'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { FavoriteCard } from 'components/business/FavoriteCard/FavoriteCard'
import { BackButton } from 'components/reusable/BackButton/BackButton'
import { ErrorNoResult } from 'components/reusable/ErrorNoResult/ErrorNoResult'

export const Favorites: FC = () => {
   const favorites = useAppSelector(selectFavorites)

   return (
      <SectionContainer>
            <BackButton>
               <Title>Favorites</Title>
            </BackButton>

            <RecipesWrapper>
               {favorites.length ? favorites.map((item: FavoritesType): JSX.Element => <FavoriteCard key={item.id} {...item} />) : 
                  <ErrorNoResult description='No favorites yet' height='50vh' />}
            </RecipesWrapper>
      </SectionContainer>
   )
}