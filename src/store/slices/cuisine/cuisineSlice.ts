import { createSlice } from '@reduxjs/toolkit'
import { cuisineAsync } from './cuisineAsync'

import { CuisineResultsType } from '../../../@types/Cuisine'
import { StatusEnum } from '../../../@types/Status'

type CuisineState = {
    cuisine: CuisineResultsType[];
    status: StatusEnum;
    error: string;
}

const initialState: CuisineState = {
    cuisine: [],
    status: StatusEnum.IDKE,
    error: '',
}

const cuisineSlice = createSlice({
    name: 'cuisine',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(cuisineAsync.pending, (state): void => {
                state.status = StatusEnum.PENDING
            })
            .addCase(cuisineAsync.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.cuisine = action.payload
            })
            .addCase(cuisineAsync.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default cuisineSlice.reducer


