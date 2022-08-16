import { combineReducers, configureStore } from '@reduxjs/toolkit'

import filterReducer from './slices/filterSlice/filterSlice'
import favoritesReducer from './slices/favoriteSlice/favoritesSlice'
import tabReducer from './slices/tabsSlice/tabsSlice'
import mealPlanReducer from './slices/mealPlanSlice/mealPlanSlice'
import authReducer from './slices/authSlice/authSlice'

import { recipesApi } from '../services/RecipesService'
import { blogsApi } from '../services/BlogsService'
import { imageUploadApi } from '../services/ImageUploadService'

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



