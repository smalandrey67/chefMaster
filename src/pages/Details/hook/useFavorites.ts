import { UseFavoritesType } from '../../../@types/Hooks'
import { DetailsType } from '../../../@types/Details'
import { FavoritesType } from '../../../@types/Favorites'

import { useAppDispatch } from '../../../hooks/useRedux'
import { addFavorite } from '../../../store/slices/favoritesSlice'

export const useFavorites = (): UseFavoritesType => {
   const dispatch = useAppDispatch()

   const status = false
   
   const favoritesHandler = (data: DetailsType | undefined): void => {
      if (!data) return

      const { id, title, image } = data

      const preparedObject: FavoritesType = {
         id,
         title,
         image,
         isActive: !status
      }

      dispatch(addFavorite(preparedObject))
   }

   return {
      favoritesHandler
   }
}