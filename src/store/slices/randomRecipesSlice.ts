import { createSlice } from '@reduxjs/toolkit'
import { randomRecipeAsync } from '../requests/randomRecipesAsync';
import { IRecipe } from '../../models/IRecipe'

type RecipeState = {
    recipes: IRecipe[];
    status: string | null,
    error: string | null,
}

const initialState: RecipeState = {
    recipes: [],
    status: null,
    error: null,
}

const randomRecipeSlice = createSlice({
    name: 'randomRecipe',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(randomRecipeAsync.pending, (state): void => {
                state.status = 'pending'
                state.error = null
            })
            .addCase(randomRecipeAsync.fulfilled, (state, action): void => {
                state.status = 'fulfilled'
                state.recipes = action.payload
            })
            .addCase(randomRecipeAsync.rejected, (state, action): void => {
                state.status = 'rejected'

                if (action.payload) {
                    state.error = action.payload
                }
            })
    }
})

export default randomRecipeSlice.reducer


