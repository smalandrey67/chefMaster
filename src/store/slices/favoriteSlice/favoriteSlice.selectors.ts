import { RootState } from 'store/store'
import { FavoriteRecipeType } from 'types/Favorites'

export const selectFavorites = (state: RootState): FavoriteRecipeType[] => state.favorites.favorites
