import { combineReducers, configureStore } from '@reduxjs/toolkit'

import authReducer from './slices/authSlice/authSlice'
import favoritesReducer from './slices/favoriteSlice/favoritesSlice'
import filterReducer from './slices/filterSlice/filterSlice'
import mealPlanReducer from './slices/mealPlanSlice/mealPlanSlice'
import tabReducer from './slices/tabsSlice/tabsSlice'

import { blogsApi } from 'services/BlogsService'
import { imageUploadApi } from 'services/ImageUploadService'
import { recipesApi } from 'services/RecipesService'

const rootReducer = combineReducers({
  filter: filterReducer,
  favorites: favoritesReducer,
  tabs: tabReducer,
  mealPlan: mealPlanReducer,
  authorisation: authReducer,
  [recipesApi.reducerPath]: recipesApi.reducer,
  [blogsApi.reducerPath]: blogsApi.reducer,
  [imageUploadApi.reducerPath]: imageUploadApi.reducer
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false })
        .concat(recipesApi.middleware)
        .concat(blogsApi.middleware)
        .concat(imageUploadApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
