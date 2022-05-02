import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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

    extraReducers: {
        [detailsRecipeAsync.pending.type]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [detailsRecipeAsync.fulfilled.type]: (state, action: PayloadAction<IDetails>) => {
            state.status = 'fulfilled'
            state.details = action.payload
        },
        [detailsRecipeAsync.rejected.type]: (state, action: PayloadAction<string>) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    },
})

export default detailsRecipeSlice.reducer


