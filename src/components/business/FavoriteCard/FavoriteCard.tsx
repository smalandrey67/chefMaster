import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { useRedirect } from 'hooks/useRedirect'
import { useAlreadyExist } from 'hooks/useAlreadyExist'
import { useRemoveFromFavorite } from './hook/useRemoveFromFavorite'

import { FavoritesType } from 'types/Favorites'
import { stringCut } from 'utils/helpers/string.helper'
import { LazyImage } from '../../reusable/LazyImage/LazyImage'

import { RecipeEl, ButtonHeart } from 'assets/styled/Reused.styled'
import { FavoriteCardImageWrapper, FavoriteCardTitle } from './FavoriteCard.styled'
import { BsSuitHeartFill } from 'react-icons/bs'
import { LocationStateType } from 'types/Location'
import { useAddIntoWeekPlan } from 'hooks/useAddIntoWeekPlan'

export const FavoriteCard: FC<FavoritesType> = ({ id, title, image, isActive }) => {
   const location = useLocation()
   const { state } = location as LocationStateType

   const isExist = useAlreadyExist(state, id)
   const addRecipeIntoWeekPlan = useAddIntoWeekPlan(state, id, title, image)
   const removeFavoriteHandler = useRemoveFromFavorite(id)
   
   const navigateHandler = useRedirect()
   const isCanAdd: boolean = state && state.prevPath === '/meal/plan' && !isExist

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