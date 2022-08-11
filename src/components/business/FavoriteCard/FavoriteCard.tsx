import { FC } from 'react'

import { useRedirect } from 'hooks/useRedirect'
import { useFavorite } from './hook/useFavorite'

import { FavoritesType } from 'types/Favorites'
import { stringCut } from 'utils/helpers/string.helper'
import { LazyImage } from '../../reusable/LazyImage/LazyImage'

import { RecipeEl, ButtonHeart } from 'assets/styled/Reused.styled'
import { FavoriteCardImageWrapper, FavoriteCardTitle } from './FavoriteCard.styled'
import { BsSuitHeartFill } from 'react-icons/bs'
import { useAlreadyExist } from './hook/useAlreadyExist'

export const FavoriteCard: FC<FavoritesType> = ({ id, title, image, isActive }) => {
   const { removeFavoriteHandler, addRecipeIntoWeekPlan, expectedPath, state } = useFavorite(id, title, image)
   const isExist = useAlreadyExist(state, id)

   const navigateHandler = useRedirect()
   const isCanAdd: boolean = state && state.prevPath === expectedPath && !isExist

   return (
      <RecipeEl onClick={() => isCanAdd ? addRecipeIntoWeekPlan() : navigateHandler('/details/', String(id))}>
         <FavoriteCardImageWrapper isExist={isExist}>
            <LazyImage image={image} alt={title} width='100%' height='100%' />
            <ButtonHeart aria-label='remove this recipe from favorite' onClick={(e) => removeFavoriteHandler(e)}>
               <BsSuitHeartFill 
                  color={isActive ? 'red' : 'black'}
                  size='25' 
               />
            </ButtonHeart>
            <FavoriteCardTitle>{stringCut(title, 34)}</FavoriteCardTitle>
         </FavoriteCardImageWrapper>
      </RecipeEl> 
   )
}