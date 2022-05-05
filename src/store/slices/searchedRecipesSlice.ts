import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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

    extraReducers: {
        [searchedRecipesAsync.pending.type]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [searchedRecipesAsync.fulfilled.type]: (state, action: PayloadAction<ICuisine[]>) => {
            state.status = 'fulfilled';
            state.searched = action.payload;
        },
        [searchedRecipesAsync.rejected.type]: (state, action: PayloadAction<string>) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
})

export default searchedRecipesSlice.reducer


