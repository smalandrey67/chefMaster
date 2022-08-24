import { UseMakeFavoriteReturnsType } from 'types/Hooks'
import { DetailsType } from 'types/Details'

import { useAppDispatch } from 'hooks/useRedux'
import { addFavorite } from 'store/slices/favoriteSlice/favoritesSlice'

export const useMakeFavorite = (data: DetailsType | undefined): UseMakeFavoriteReturnsType => {
   const dispatch = useAppDispatch()

   const activeFavoriteStatus = false
   const makeRecipefavoriteHandler = (): void => {
      if (data) {
         const { id, title, image } = data

         dispatch(addFavorite(id, title, image, activeFavoriteStatus))
      }
   }

   return makeRecipefavoriteHandler
}