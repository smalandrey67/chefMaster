import { createSlice } from '@reduxjs/toolkit'
import { detailsRecipeAsync } from '../requests/detailsRecipesAsync'

import { IDetails } from '../../models/IDetails'

type RecipeState = {
    details: IDetails | null,
    status: string | null,
    error: string | null,
}

const initialState: RecipeState = {
    details: null,
    status: null,
    error: null,
}

const detailsRecipeSlice = createSlice({
    name: 'detailsRecipe',
    initialState,
    reducers: {},


    extraReducers: (builder): void => {
        builder
            .addCase(detailsRecipeAsync.pending, (state): void => {
                state.status = 'pending'
                state.error = null
            })
            .addCase(detailsRecipeAsync.fulfilled, (state, action): void => {
                state.status = 'fulfilled'
                state.details = action.payload
            })
            .addCase(detailsRecipeAsync.rejected, (state, action): void => {
                state.status = 'rejected'

                if (action.payload) {
                    state.error = action.payload
                }
            })
    }
})

export default detailsRecipeSlice.reducer


