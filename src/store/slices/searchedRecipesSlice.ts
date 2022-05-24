import { createSlice } from '@reduxjs/toolkit'
import { searchedRecipesAsync } from '../requests/searchedRecipesAsync'

import { CuisineResultsType } from '../../types/Cuisine'
import { StatusEnum } from '../../types/Status'

type RecipeState = {
    searched: CuisineResultsType[]
    status: StatusEnum
    error: string
}

const initialState: RecipeState = {
    searched: [],
    status: StatusEnum.IDKE,
    error: '',
}

const searchedRecipesSlice = createSlice({
    name: 'searchedRecipes',
    initialState,
    reducers: {},


    extraReducers: (builder): void => {
        builder
            .addCase(searchedRecipesAsync.pending, (state): void => {
                state.status = StatusEnum.PENDING
            })
            .addCase(searchedRecipesAsync.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.searched = action.payload
            })
            .addCase(searchedRecipesAsync.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default searchedRecipesSlice.reducer


