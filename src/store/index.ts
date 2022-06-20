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
import favoritesReducer from './slices/favorites/favoritesSlice'

const rootReducer = combineReducers({
    recipes: recipesReducer,
    cuisine: cuisineReducer,
    details: detailsReducer, 
    searched: searchedReducer, 
    nutritions: nutritionsReducer, 
    answer: answerReducer,
    blogs: blogsReducer,
    uploadImage: uploadImageReducer,
    uploadBlog: uploadBlogReducer,
    filter: filterReducer,
    favorites: favoritesReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore> 
export type AppDispatch = AppStore['dispatch']



