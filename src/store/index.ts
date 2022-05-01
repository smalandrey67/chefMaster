import { combineReducers, configureStore } from '@reduxjs/toolkit'

import getRandomRecipesReducer  from './slices/randomRecipesSlice'
import cuisineRecipesReducer from './slices/cuisineRecipesSlice'

const rootReducer = combineReducers({
    getRandomRecipesReducer,
    cuisineRecipesReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore> 
export type AppDispatch = AppStore['dispatch']



