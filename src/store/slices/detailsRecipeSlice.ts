import { createSlice } from '@reduxjs/toolkit'
import { detailsRecipeAsync } from '../requests/detailsRecipesAsync'

import { DetailsType } from '../../types/Details'
import { StatusEnum } from '../../types/Status'

type detailsState = {
    details: DetailsType | null
    status: StatusEnum
    error: string,
}

const initialState: detailsState = {
    details: null,
    status: StatusEnum.IDKE,
    error: '',
}

const detailsRecipeSlice = createSlice({
    name: 'detailsRecipe',
    initialState,
    reducers: {},


    extraReducers: (builder): void => {
        builder
            .addCase(detailsRecipeAsync.pending, (state): void => {
                state.status = StatusEnum.PENDING
            })
            .addCase(detailsRecipeAsync.fulfilled, (state, action): void => {
                state.status = StatusEnum.FULFILLED
                state.details = action.payload
            })
            .addCase(detailsRecipeAsync.rejected, (state, action): void => {
                state.status = StatusEnum.REJECTED
                state.error = action.payload as string
            })
    }
})

export default detailsRecipeSlice.reducer


