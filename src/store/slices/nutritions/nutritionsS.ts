import { createSlice } from '@reduxjs/toolkit'
import { nutritionsA } from './nutritionsA'

import { NutritionType } from '../../../@types/Nutrition'
import { StatusEnum } from '../../../@types/Status'

type nutritionState = {
    nutrition: NutritionType,
    status: StatusEnum,
    error: string,
}

const initialState: nutritionState = {
    nutrition: {} as NutritionType,
    status: StatusEnum.IDKE,
    error: '',
}

const nutritionsS = createSlice({
    name: 'nutritionRecipe',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(nutritionsA.pending, (state): void => {
                state.status = StatusEnum.IDKE
            })
            .addCase(nutritionsA.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.nutrition = action.payload
            })
            .addCase(nutritionsA.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default nutritionsS.reducer


