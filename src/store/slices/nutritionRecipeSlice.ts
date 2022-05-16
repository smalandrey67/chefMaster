import { createSlice } from '@reduxjs/toolkit'
import { nutritionRecipeAsync } from '../requests/nutritionRecipeAsync'

import { INutrition } from '../../models/INutrition'

type RecipeState = {
    nutrition: INutrition | null,
    status: string | null,
    error: string | null,
}

const initialState: RecipeState = {
    nutrition: null,
    status: null,
    error: null,
}

const nutritionRecipeSlice = createSlice({
    name: 'nutritionRecipe',
    initialState,
    reducers: {},


    extraReducers: (builder): void => {
        builder
            .addCase(nutritionRecipeAsync.pending, (state): void => {
                state.status = 'pending'
                state.error = null
            })
            .addCase(nutritionRecipeAsync.fulfilled, (state, action): void => {
                state.status = 'fulfilled'
                state.nutrition = action.payload
            })
            .addCase(nutritionRecipeAsync.rejected, (state, action): void => {
                state.status = 'rejected'

                if (action.payload) {
                    state.error = action.payload
                }
            })
    }
})

export default nutritionRecipeSlice.reducer


