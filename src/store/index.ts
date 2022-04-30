import { combineReducers, configureStore } from '@reduxjs/toolkit'
import getRandomRecipesReducer  from './slices/randomRecipesSlice'

const rootReducer = combineReducers({
    getRandomRecipesReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore> 
export type AppDispatch = AppStore['dispatch']



