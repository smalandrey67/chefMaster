import { combineReducers, configureStore } from '@reduxjs/toolkit'

import recipesR  from './slices/recipes/recipesS'
import cuisineR from './slices/cuisine/cuisineS'
import detailsR from './slices/details/detailsS'
import searchedR from './slices/searched/searchedS'
import nutritionsR from './slices/nutritions/nutritionsS'
import answerR from './slices/answer/answerS'
import blogsR from './slices/blogs/blogsS'
import uploadImageR from './slices/uploadImage/uploadImageS'
import uploadBlogR from './slices/uploadBlog/uploadBlogS'


const rootReducer = combineReducers({
    recipesR,
    cuisineR,
    detailsR, 
    searchedR, 
    nutritionsR, 
    answerR,
    blogsR,
    uploadImageR,
    uploadBlogR,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore> 
export type AppDispatch = AppStore['dispatch']



