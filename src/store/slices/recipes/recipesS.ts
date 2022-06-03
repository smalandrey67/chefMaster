import { createSlice } from '@reduxjs/toolkit'
import { recipesA } from './recipesA';

import { RecipeResultType } from '../../../models/Recipe'
import { StatusEnum } from '../../../models/Status'

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

const recipesS = createSlice({
    name: 'randomRecipe',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(recipesA.pending, (state): void => {
                state.status = StatusEnum.PENDING
            })
            .addCase(recipesA.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.recipes = action.payload
            })
            .addCase(recipesA.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default recipesS.reducer


