import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCuisineRecipes } from '../../config'

import { ICuisine } from '../../models/ICuisine'

export const cuisineRecipesAsync = createAsyncThunk<ICuisine[], string, { rejectValue: string }>(
    'cuisineRecipes/cuisineRecipesAsync',

    async (country, { rejectWithValue }) => {
        // temporary we add to local storage. We have few pointes for requests
        if (localStorage.getItem('cuisine')) {
            return [...JSON.parse(localStorage.getItem('cuisine') || '')]
        }

        const response = await fetch(getCuisineRecipes(country))

        if (!response.ok) {
            return rejectWithValue('Can\'t download this cuisine. Server error.')
        }

        const data = await response.json()

        //temporary we add to local storage. We have few pointes for requests
        localStorage.setItem('cuisine', JSON.stringify(data.results))

        return (await data.results) as ICuisine[]

    }
)