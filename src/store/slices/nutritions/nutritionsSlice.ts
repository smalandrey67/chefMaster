import { createSlice } from '@reduxjs/toolkit'
import { nutritionsAsync } from './nutritionsAsync'

import { NutritionType } from '../../../@types/Nutrition'
import { StatusEnum } from '../../../@types/Status'

type NutritionState = {
    nutrition: NutritionType;
    status: StatusEnum;
    error: string;
}

const initialState: NutritionState = {
    nutrition: {} as NutritionType,
    status: StatusEnum.IDKE,
    error: '',
}

const nutritionsSlice = createSlice({
    name: 'nutritionRecipe',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(nutritionsAsync.pending, (state): void => {
                state.status = StatusEnum.IDKE
            })
            .addCase(nutritionsAsync.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.nutrition = action.payload
            })
            .addCase(nutritionsAsync.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default nutritionsSlice.reducer


