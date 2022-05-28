import { createSlice } from '@reduxjs/toolkit'
import { randomRecipeAsync } from '../requests/randomRecipesAsync';

import { RecipeResultType } from '../../types/Recipe'
import { StatusEnum } from '../../types/Status'

type randomRecipeState = {
    recipes: RecipeResultType[];
    status: StatusEnum
    error: string
}

const initialState: randomRecipeState = {
    recipes: [],
    status: StatusEnum.IDKE,
    error: '',
}

const randomRecipeSlice = createSlice({
    name: 'randomRecipe',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(randomRecipeAsync.pending, (state): void => {
                state.status = StatusEnum.PENDING
            })
            .addCase(randomRecipeAsync.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.recipes = action.payload
            })
            .addCase(randomRecipeAsync.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default randomRecipeSlice.reducer


