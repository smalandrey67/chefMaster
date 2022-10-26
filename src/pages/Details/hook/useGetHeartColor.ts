import { useAppSelector } from 'hooks/useRedux'
import { selectFavorites } from 'store/slices/favoriteSlice/favoriteSlice.selectors'

import { DetailsType } from 'types/Details'

export const useGetHeartColor = (details: DetailsType | undefined): 'red' | 'black' => {
  const favorites = useAppSelector(selectFavorites)

  const favoriteRecipe = favorites.find((item) => item.id === details?.id)

  if (favoriteRecipe?.isActive) return 'red'

  return 'black'
} // #This function checks if we have the same details object in the favorites array, so we make it red rather than black
