import { FavoritesType } from 'types/Favorites'

export type FavoritesState = {
   favorites: FavoritesType[];
}

export type RemoveFavoritePayload = {
   id: number;
}