import { createSlice } from '@reduxjs/toolkit'
import { searchedRecipesAsync } from '../requests/searchedRecipesAsync';
import { ICuisine } from '../../models/ICuisine'

type RecipeState = {
    searched: ICuisine[];
    status: string | null,
    error: string | null,
}

const initialState: RecipeState = {
    searched: [],
    status: null,
    error: null,
}

const searchedRecipesSlice = createSlice({
    name: 'searchedRecipes',
    initialState,
    reducers: {},


    extraReducers: (builder): void => {
        builder
            .addCase(searchedRecipesAsync.pending, (state): void => {
                state.status = 'pending'
                state.error = null
            })
            .addCase(searchedRecipesAsync.fulfilled, (state, action): void => {
                state.status = 'fulfilled'
                state.searched = action.payload
            })
            .addCase(searchedRecipesAsync.rejected, (state, action): void => {
                state.status = 'rejected'

                if (action.payload) {
                    state.error = action.payload
                }
            })
    }
})

export default searchedRecipesSlice.reducer


