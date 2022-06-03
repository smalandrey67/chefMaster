import { createSlice } from '@reduxjs/toolkit'
import { searchedA } from './searchedA'

import { CuisineResultsType } from '../../../models/Cuisine'
import { StatusEnum } from '../../../models/Status'

type searhedState = {
    searched: CuisineResultsType[]
    status: StatusEnum
    error: string
}

const initialState: searhedState = {
    searched: [],
    status: StatusEnum.IDKE,
    error: '',
}

const searchedS = createSlice({
    name: 'searchedRecipes',
    initialState,
    reducers: {},


    extraReducers: (builder): void => {
        builder
            .addCase(searchedA.pending, (state): void => {
                state.status = StatusEnum.PENDING
            })
            .addCase(searchedA.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.searched = action.payload
            })
            .addCase(searchedA.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default searchedS.reducer


