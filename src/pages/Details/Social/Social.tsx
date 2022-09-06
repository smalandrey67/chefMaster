import { FC, memo } from 'react'

import { useAppSelector } from 'hooks/useRedux'
import { selectFavorites } from 'store/slices/favoriteSlice/favoriteSlice.selectors'
import { useMakeFavorite } from '../hook/useMakeFavorite'

import { BsClock, BsSuitHeartFill } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'

import { ButtonHeart } from 'assets/styled/Reused.styled'
import { SocialReadyMinutes, SocialAgreeLikes } from './Social.styled'

import { SocialProps } from './Social.types'

export const Social: FC<SocialProps> = memo(({ details }) => {
   const makeRecipefavoriteHandler = useMakeFavorite(details)
   const favorites = useAppSelector(selectFavorites)

   const getColorOfHeart = (): 'red' | 'black' => {
      const favoriteRecipe = favorites.find(item => item.id === details?.id)

      if (favoriteRecipe?.isActive) return 'red'

      return 'black'
   } // #This function checks if we have the same details object in the favorites array, so we make it red rather than black

   const colorType = getColorOfHeart()

   return (
      <>
         <ButtonHeart aria-label='make this recipe the favorite' onClick={makeRecipefavoriteHandler}>
            <BsSuitHeartFill color={colorType} size='25' />
         </ButtonHeart>

         <SocialReadyMinutes>
            <BsClock size='20' />
            {details?.readyInMinutes} min
         </SocialReadyMinutes>

         <SocialAgreeLikes>
            <AiOutlineLike size='20' />
            {details?.aggregateLikes}
         </SocialAgreeLikes>
      </>
   )
})