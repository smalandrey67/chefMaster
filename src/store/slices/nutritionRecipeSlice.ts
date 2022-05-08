import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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

    extraReducers: {
        [nutritionRecipeAsync.pending.type]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [nutritionRecipeAsync.fulfilled.type]: (state, action: PayloadAction<INutrition>) => {
            state.status = 'fulfilled'
            state.nutrition = action.payload
        },
        [nutritionRecipeAsync.rejected.type]: (state, action: PayloadAction<string>) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    },
})

export default nutritionRecipeSlice.reducer


