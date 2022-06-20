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
      addFavorite: (state, { payload }: PayloadAction<FavoritesType>): void => {
         const recipe = state.favorites.find((item: FavoritesType): boolean => item.id === payload.id)

         if (recipe && recipe.isActive) {
            state.favorites = state.favorites.map((item: FavoritesType): FavoritesType => {
               if (item.id === recipe.id) {
                  return { ...item, isActive: !item.isActive }
               }

               return item
            })

            state.favorites = state.favorites.filter((item: FavoritesType): boolean => item.id !== recipe.id)
            localStorage.setItem('favorites', JSON.stringify(state.favorites))
         } else {
            state.favorites = [payload, ...state.favorites]
            localStorage.setItem('favorites', JSON.stringify(state.favorites))
         }

      },
   }
})

export const { addFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer