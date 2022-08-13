import { useAppDispatch } from 'hooks/useRedux'
import { useFavoriteType } from 'types/Hooks'

import { removeFavorite } from 'store/slices/favoriteSlice/favoritesSlice'

export const useRemoveFromFavorite = (id: number): useFavoriteType => {
   const dispatch = useAppDispatch()

   const removeFavoriteHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      e.stopPropagation()
      dispatch(removeFavorite({ id }))
   }

   return removeFavoriteHandler
}