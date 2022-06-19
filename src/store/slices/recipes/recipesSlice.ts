import { createSlice } from '@reduxjs/toolkit'
import { recipesAsync } from './recipesAsync';

import { RecipeResultType } from '../../../@types/Recipe'
import { StatusEnum } from '../../../@types/Status'

type RandomRecipeState = {
    recipes: RecipeResultType[];
    status: StatusEnum;
    error: string;
}

const initialState: RandomRecipeState = {
    recipes: [],
    status: StatusEnum.IDKE,
    error: '',
}

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(recipesAsync.pending, (state): void => {
                state.status = StatusEnum.PENDING
            })
            .addCase(recipesAsync.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.recipes = action.payload
            })
            .addCase(recipesAsync.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default recipesSlice.reducer


