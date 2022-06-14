import { combineReducers, configureStore } from '@reduxjs/toolkit'

import recipesReducer  from './slices/recipes/recipesSlice'
import cuisineReducer from './slices/cuisine/cuisineSlice'
import detailsReducer from './slices/details/detailsSlice'
import searchedReducer from './slices/searched/searchedSlice'
import nutritionsReducer from './slices/nutritions/nutritionsSlice'
import answerReducer from './slices/answer/answerSlice'
import blogsReducer from './slices/blogs/blogsSlice'
import uploadImageReducer from './slices/uploadImage/uploadImageSlice'
import uploadBlogReducer from './slices/uploadBlog/uploadBlogSlice'
import filterReducer from './slices/filter/filterSlice'

const rootReducer = combineReducers({
    recipesReducer,
    cuisineReducer,
    detailsReducer, 
    searchedReducer, 
    nutritionsReducer, 
    answerReducer,
    blogsReducer,
    uploadImageReducer,
    uploadBlogReducer,
    filterReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore> 
export type AppDispatch = AppStore['dispatch']



