import { createSlice } from '@reduxjs/toolkit'
import { cuisineRecipesAsync } from '../requests/cuisineRecipesAsync'

import { ICuisine } from '../../models/ICuisine'

type RecipeState = {
    cuisine: ICuisine[];
    status: string | null,
    error: string | null,
}

const initialState: RecipeState = {
    cuisine: [],
    status: null,
    error: null,
}

const cuisineRecipeSlice = createSlice({
    name: 'cuisineRecipes',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(cuisineRecipesAsync.pending, (state): void => {
                state.status = 'pending'
                state.error = null
            })
            .addCase(cuisineRecipesAsync.fulfilled, (state, action): void => {
                state.status = 'fulfilled'
                state.cuisine = action.payload
            })
            .addCase(cuisineRecipesAsync.rejected, (state, action): void => {
                state.status = 'rejected'

                if (action.payload) {
                    state.error = action.payload
                }
            })
    }
})

export default cuisineRecipeSlice.reducer


