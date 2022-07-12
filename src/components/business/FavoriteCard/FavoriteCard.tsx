import { FC, MouseEvent } from 'react'

import { FavoritesType } from '../../../@types/Favorites'
import { stringCut } from '../../../utils/helpers/string.helpers'

import { RecipeEl, ButtonHeart } from '../../../assets/styled/Reused.styled'
import { FavoriteCardImageWrapper, FavoriteCardImage, FavoriteCardTitle } from './FavoriteCard.styled'
import { BsSuitHeartFill } from 'react-icons/bs'

import { useRedirect } from '../../../hooks/useRedirect'
import { useAppDispatch } from '../../../hooks/useRedux'
import { removeFavorite } from '../../../store/slices/favoritesSlice'

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
            <FavoriteCardImage src={image} alt={title} />
            <ButtonHeart onClick={removeFavoriteHandler}>
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