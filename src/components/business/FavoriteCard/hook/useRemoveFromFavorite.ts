import { MouseEvent } from 'react'

import { useAppDispatch } from 'hooks/useRedux'
import { UseRemoveFromFavoriteReturnsType } from 'types/Hooks'

import { removeFavorite } from 'store/slices/favoriteSlice/favoritesSlice'

export const useRemoveFromFavorite = (id: number): UseRemoveFromFavoriteReturnsType => {
  const dispatch = useAppDispatch()

  const removeFavoriteRecipeHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()
    dispatch(removeFavorite({ id }))
  }

  return removeFavoriteRecipeHandler
}
