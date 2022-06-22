import { createSlice } from '@reduxjs/toolkit'
import { detailsAsync } from './detailsAsync'

import { DetailsType } from '../../../@types/Details'
import { StatusEnum } from '../../../@types/Status'

type DetailsState = {
    details: DetailsType;
    status: StatusEnum;
    error: string;
}

const initialState: DetailsState = {
    details: {} as DetailsType,
    status: StatusEnum.IDKE,
    error: ''
}

const detailsS = createSlice({
    name: 'details',
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder
            .addCase(detailsAsync.pending, (state): void => {
                state.status = StatusEnum.PENDING
            })
            .addCase(detailsAsync.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.details = action.payload
            })
            .addCase(detailsAsync.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default detailsS.reducer


