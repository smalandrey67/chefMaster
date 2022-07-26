import { FC, MouseEvent } from 'react'

import { FavoritesType } from 'types/Favorites'
import { stringCut } from 'utils/helpers/string.helper'
import { LazyImage } from '../../reusable/LazyImage/LazyImage'

import { RecipeEl, ButtonHeart } from 'assets/styled/Reused.styled'
import { FavoriteCardImageWrapper, FavoriteCardTitle } from './FavoriteCard.styled'
import { BsSuitHeartFill } from 'react-icons/bs'

import { useRedirect } from 'hooks/useRedirect'
import { useAppDispatch } from 'hooks/useRedux'
import { removeFavorite } from 'store/slices/favoritesSlice'

export const FavoriteCard: FC<FavoritesType> = ({ id, title, image, isActive }) => {
   const dispatch = useAppDispatch()
   const { navigateHandler } = useRedirect()
  
   const removeFavoriteHandler = (e: MouseEvent): void => {
      e.stopPropagation()
      dispatch(removeFavorite(id))
   }

   return (
      <RecipeEl onClick={() => navigateHandler('/details/', id)}>
         <FavoriteCardImageWrapper>
            <LazyImage 
               image={image} 
               alt={title}
               width='100%'
               height='100%'
             />
            <ButtonHeart aria-label='remove this recipe from favorite' onClick={removeFavoriteHandler}>
               <BsSuitHeartFill 
                  color={`${isActive ? 'red' : 'black'}`}
                  size='25' 
               />
            </ButtonHeart>

            <FavoriteCardTitle>{stringCut(title, 34)}</FavoriteCardTitle>
         </FavoriteCardImageWrapper>
      </RecipeEl> 
   )
}