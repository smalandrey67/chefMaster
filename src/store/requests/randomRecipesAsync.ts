import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRandomRecipes } from '../../config'

import { IRecipe } from '../../models/IRecipe'

export const randomRecipeAsync = createAsyncThunk<IRecipe[], undefined, { rejectValue: string }>(
    'randomRecipe/randomRecipeAsync',

    async (_, { rejectWithValue }) => {
            // temporary we add to local storage. We have few pointes for requests
            if(localStorage.getItem('recipes')){
                return [...JSON.parse(localStorage.getItem('recipes') || '')]
            }

            const response = await fetch(getRandomRecipes())

            if (!response.ok) {
                return rejectWithValue('Can\'t download recipes. Server error.')
            }

            const data = await response.json()

            //temporary we add to local storage. We have few pointes for requests
            localStorage.setItem('recipes', JSON.stringify(data.recipes))

            return (await data.recipes) as IRecipe[]
    }
)