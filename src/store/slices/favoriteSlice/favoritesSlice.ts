import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FavoriteRecipeType } from 'types/Favorites'
import { FavoritesState, RemoveFavoritePayload } from './favoriteSlice.types'

const initialState: FavoritesState = {
   favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') || '') : []
}

const favoritesSlice = createSlice({
   name: 'favorites',
   initialState,
   reducers: {
      removeFavorite: (state, { payload }: PayloadAction<RemoveFavoritePayload>): void => {
         state.favorites = state.favorites.filter(item => item.id !== payload.id)

         localStorage.setItem('favorites', JSON.stringify(state.favorites))
      },

      addFavorite: {
         reducer: (state, { payload }: PayloadAction<FavoriteRecipeType>): void => {
            const recipe = state.favorites.find(item => item.id === payload.id)

            if (recipe && recipe.isActive) {
               state.favorites = state.favorites.filter((item: FavoriteRecipeType): boolean => item.id !== recipe.id)

               localStorage.setItem('favorites', JSON.stringify(state.favorites))
            } else {
               state.favorites = [payload, ...state.favorites]

               localStorage.setItem('favorites', JSON.stringify(state.favorites))
            }
         },
         prepare: (id: number, title: string, image: string, activeFavoriteStatus: boolean) => {
            return {
               payload: {
                  id,
                  title,
                  image,
                  isActive: !activeFavoriteStatus
               }
            }
         }

      }
   }
})

export const { removeFavorite, addFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer