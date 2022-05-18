import { combineReducers, configureStore } from '@reduxjs/toolkit'

import getRandomRecipesReducer  from './slices/randomRecipesSlice'
import cuisineRecipesReducer from './slices/cuisineRecipesSlice'
import detailsRecipeReducer from './slices/detailsRecipeSlice'
import searchedRecipesReducer from './slices/searchedRecipesSlice'
import nutritionRecipeReducer from './slices/nutritionRecipeSlice'
import quickAnswerReducer from './slices/quickAnswerSlice'


const rootReducer = combineReducers({
    getRandomRecipesReducer,
    cuisineRecipesReducer,
    detailsRecipeReducer, 
    searchedRecipesReducer, 
    nutritionRecipeReducer, 
    quickAnswerReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore> 
export type AppDispatch = AppStore['dispatch']



