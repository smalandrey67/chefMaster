import { createSlice } from '@reduxjs/toolkit'
import { cuisineRecipesAsync } from '../requests/cuisineRecipesAsync'

import { CuisineResultsType } from '../../types/Cuisine'
import { StatusEnum } from '../../types/Status'

type CuisineState = {
    cuisine: CuisineResultsType[];
    status: StatusEnum,
    error: string,
}

const initialState: CuisineState = {
    cuisine: [],
    status: StatusEnum.IDKE,
    error: '',
}

const cuisineRecipeSlice = createSlice({
    name: 'cuisineRecipes',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(cuisineRecipesAsync.pending, (state): void => {
                state.status = StatusEnum.PENDING
            })
            .addCase(cuisineRecipesAsync.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.cuisine = action.payload
            })
            .addCase(cuisineRecipesAsync.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})


export default cuisineRecipeSlice.reducer


