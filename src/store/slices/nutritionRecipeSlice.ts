import { createSlice } from '@reduxjs/toolkit'
import { nutritionRecipeAsync } from '../requests/nutritionRecipeAsync'

import { NutritionType } from '../../types/Nutrition'
import { StatusEnum } from '../../types/Status'

type nutritionState = {
    nutrition: NutritionType | null,
    status: StatusEnum,
    error: string,
}

const initialState: nutritionState = {
    nutrition: null,
    status: StatusEnum.IDKE,
    error: '',
}

const nutritionRecipeSlice = createSlice({
    name: 'nutritionRecipe',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(nutritionRecipeAsync.pending, (state): void => {
                state.status = StatusEnum.IDKE
            })
            .addCase(nutritionRecipeAsync.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.nutrition = action.payload
            })
            .addCase(nutritionRecipeAsync.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default nutritionRecipeSlice.reducer


