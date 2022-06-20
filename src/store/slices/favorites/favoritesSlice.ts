import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FavoritesType } from '../../../@types/Favorites'

type FavoritesState = {
   favorites: FavoritesType[];
}

const initialState: FavoritesState = {
   favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') || '') : [],
}

const favoritesSlice = createSlice({
   name: 'favorites',
   initialState,
   reducers: {
      removeFavorite: (state, { payload }: PayloadAction<number>): void => {
         state.favorites = state.favorites.filter((item: FavoritesType): boolean => item.id !== payload)
         
         localStorage.setItem('favorites', JSON.stringify(state.favorites))
      },

      addFavorite: (state, { payload }: PayloadAction<FavoritesType>): void => {
         const recipe = state.favorites.find((item: FavoritesType): boolean => item.id === payload.id)

         if (recipe && recipe.isActive) {
            state.favorites = state.favorites.filter((item: FavoritesType): boolean => item.id !== recipe.id)

            localStorage.setItem('favorites', JSON.stringify(state.favorites))
         } else {
            state.favorites = [payload, ...state.favorites]

            localStorage.setItem('favorites', JSON.stringify(state.favorites))
         }

      },
   }
})

export const { removeFavorite, addFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer