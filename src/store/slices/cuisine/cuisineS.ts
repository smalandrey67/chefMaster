import { createSlice } from '@reduxjs/toolkit'
import { cuisineA } from './cuisineA'

import { CuisineResultsType } from '../../../models/Cuisine'
import { StatusEnum } from '../../../models/Status'

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

const cuisineS = createSlice({
    name: 'cuisineRecipes',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(cuisineA.pending, (state): void => {
                state.status = StatusEnum.PENDING
            })
            .addCase(cuisineA.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.cuisine = action.payload
            })
            .addCase(cuisineA.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})


export default cuisineS.reducer


