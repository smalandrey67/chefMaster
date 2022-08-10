import { FC, memo } from 'react'

import { useAppSelector } from 'hooks/useRedux'
import { selectFavorites } from 'store/selectors'
import { useFavorites } from '../hook/useFavorites'

import { BsClock, BsSuitHeartFill } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'

import { ButtonHeart } from 'assets/styled/Reused.styled'
import { SocialReadyMinutes, SocialAgreeLikes } from './Social.styled'

import { FavoritesType } from 'types/Favorites'
import { DetailsType } from 'types/Details'

type SocialProps = {
  details: DetailsType | undefined;
}

export const Social: FC<SocialProps> = memo(({ details }) => {
   const favoritesHandler = useFavorites()
   const favorites = useAppSelector(selectFavorites)

   const getColorOfHeart = (): 'red' | 'black' => {
      const element: FavoritesType | undefined = favorites.find(item => item.id === details?.id)

      if (element?.isActive) return 'red'

      return 'black'
   } // #This function checks if we have the same details object in the favorites array, make it red rather than black

   const colorType = getColorOfHeart()

   return (
      <>
         <ButtonHeart aria-label='make this recipe a favorite' onClick={() => favoritesHandler(details)}>
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