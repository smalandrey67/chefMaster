import { FC, MouseEvent } from 'react'
import { useNavigate, NavigateFunction } from 'react-router-dom'

import { FavoritesType } from '../../../@types/Favorites'
import { useAppDispatch } from '../../../hooks/useRedux'
import { removeFavorite } from '../../../store/slices/favorites/favoritesSlice'

import { RecipeEl, ButtonHeart } from '../../../assets/styled/Reused.styled'
import { FavoriteCardImageWrapper, FavoriteCardImage, FavoriteCardTitle } from './FavoriteCard.styled'

import { BsSuitHeartFill } from 'react-icons/bs'
import { stringCut } from '../../../utils/helpers/string.helpers'

export const FavoriteCard: FC<FavoritesType> = ({ id, title, image, isActive }) => {
   const dispatch = useAppDispatch()
   const navigate: NavigateFunction = useNavigate()

   const detailsNavigateHandler = (): void => {
      navigate(`/details/${id}`)
   }
   
   const removeFavoriteHandler = (e: MouseEvent): void => {
      e.stopPropagation()
      dispatch(removeFavorite(id))
   }

   return (
      <RecipeEl onClick={detailsNavigateHandler}>
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