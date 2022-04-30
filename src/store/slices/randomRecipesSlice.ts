import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { randomRecipeAsync } from '../requests/randomRecipesAsync';
import { IRecipe } from '../../models/IRecipe'

interface RecipeState {
    recipes: IRecipe[];
    status: string | null,
    error: string | null,
}

const initialState: RecipeState = {
    recipes: [],
    status: null,
    error: null,
}

const randomRecipeSlice = createSlice({
    name: 'randomRecipe',
    initialState,
    reducers: {},

    extraReducers: {
        [randomRecipeAsync.pending.type]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [randomRecipeAsync.fulfilled.type]: (state, action: PayloadAction<IRecipe[]>) => {
            state.status = 'fulfilled';
            state.recipes = action.payload;
        },
        [randomRecipeAsync.rejected.type]: (state, action: PayloadAction<string>) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
})

export default randomRecipeSlice.reducer


