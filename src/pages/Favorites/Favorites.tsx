import { FC } from 'react'

import { RecipesWrapper, Title } from 'assets/styled/Reused.styled'

import { useAppSelector } from 'hooks/useRedux'
import { selectFavorites } from 'store/slices/favoriteSlice/favoriteSlice.selectors'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { FavoriteCard } from 'components/business/FavoriteCard/FavoriteCard'
import { BackButtonContainer } from 'components/containers/BackButtonContainer/BackButtonContainer'
import { ErrorNoResult } from 'components/reusable/ErrorNoResult/ErrorNoResult'

export const Favorites: FC = () => {
   const favorites = useAppSelector(selectFavorites)

   return (
      <SectionContainer>
         <BackButtonContainer>
            <Title>Favorites ({favorites.length})</Title>
         </BackButtonContainer>

         <RecipesWrapper>
            {favorites.length ? favorites.map(favoriteRecipe => <FavoriteCard key={favoriteRecipe.id} {...favoriteRecipe} />) :
               <ErrorNoResult description='No favorites yet' height='50vh' />}
         </RecipesWrapper>
      </SectionContainer>
   )
}