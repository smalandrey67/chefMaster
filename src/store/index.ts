import { combineReducers, configureStore } from '@reduxjs/toolkit'

import getRandomRecipesReducer  from './slices/randomRecipesSlice'
import cuisineRecipesReducer from './slices/cuisineRecipesSlice'
import detailsRecipeReducer from './slices/detailsRecipeSlice'

const rootReducer = combineReducers({
    getRandomRecipesReducer,
    cuisineRecipesReducer,
    detailsRecipeReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore> 
export type AppDispatch = AppStore['dispatch']



