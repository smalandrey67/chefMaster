import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cuisineRecipesAsync } from '../requests/cuisineRecipesAsync'
import { ICuisine } from '../../models/ICuisine'

interface RecipeState {
    cuisine: ICuisine[];
    status: string | null,
    error: string | null,
}

const initialState: RecipeState = {
    cuisine: [],
    status: null,
    error: null,
}

const cuisineRecipeSlice = createSlice({
    name: 'cuisineRecipes',
    initialState,
    reducers: {},

    extraReducers: {
        [cuisineRecipesAsync.pending.type]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [cuisineRecipesAsync.fulfilled.type]: (state, action: PayloadAction<ICuisine[]>) => {
            state.status = 'fulfilled';
            state.cuisine = action.payload;
        },
        [cuisineRecipesAsync.rejected.type]: (state, action: PayloadAction<string>) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
})

export default cuisineRecipeSlice.reducer


