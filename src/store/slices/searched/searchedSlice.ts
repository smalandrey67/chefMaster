import { createSlice } from '@reduxjs/toolkit'
import { searchedAsync } from './searchedAsync'

import { CuisineResultsType } from '../../../@types/Cuisine'
import { StatusEnum } from '../../../@types/Status'

type SearchedState = {
    searched: CuisineResultsType[];
    status: StatusEnum;
    error: string;
}

const initialState: SearchedState = {
    searched: [],
    status: StatusEnum.IDKE,
    error: '',
}

const searchedSlice = createSlice({
    name: 'searched',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(searchedAsync.pending, (state): void => {
                state.status = StatusEnum.PENDING
            })
            .addCase(searchedAsync.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.searched = action.payload
            })
            .addCase(searchedAsync.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default searchedSlice.reducer


