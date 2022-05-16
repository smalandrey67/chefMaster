import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchedRecipes } from '../../config'

import { ICuisine } from '../../models/ICuisine'

export const searchedRecipesAsync = createAsyncThunk<ICuisine[], string, { rejectValue: string }>(
    'searchedRecipes/searchedRecipesAsync',

    async (name, { rejectWithValue }) => {
        // temporary we add to local storage. We have few pointes for requests
        if (localStorage.getItem('searched')) {
            return JSON.parse(localStorage.getItem('searched') || '')
        }

        const response = await fetch(getSearchedRecipes(name))

        if (!response.ok) {
            rejectWithValue('Can\'t find this product. Server error.')
        }

        const data = await response.json()

        //temporary we add to local storage. We have few pointes for requests
        localStorage.setItem('searched', JSON.stringify(data.results))

        return await (data.results) as ICuisine[]
    }
)