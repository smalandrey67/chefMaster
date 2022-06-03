import { createSlice } from '@reduxjs/toolkit'
import { detailsA } from './detailsA'

import { DetailsType } from '../../../models/Details'
import { StatusEnum } from '../../../models/Status'

type detailsState = {
    details: DetailsType
    status: StatusEnum
    error: string,
}

const initialState: detailsState = {
    details: {} as DetailsType,
    status: StatusEnum.IDKE,
    error: '',
}

const detailsS = createSlice({
    name: 'detailsRecipe',
    initialState,
    reducers: {},


    extraReducers: (builder): void => {
        builder
            .addCase(detailsA.pending, (state): void => {
                state.status = StatusEnum.PENDING
            })
            .addCase(detailsA.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.details = action.payload
            })
            .addCase(detailsA.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default detailsS.reducer


