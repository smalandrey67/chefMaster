import { FavoriteRecipeType } from 'types/Favorites'

export type FavoritesState = {
   favorites: FavoriteRecipeType[];
}
export type RemoveFavoritePayload = {
   id: number;
}