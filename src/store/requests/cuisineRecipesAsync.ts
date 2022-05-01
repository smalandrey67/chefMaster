import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCuisineRecipes } from '../../config'

export const cuisineRecipesAsync = createAsyncThunk(
    'cuisineRecipes/cuisineRecipesAsync',

    async (country: string, { rejectWithValue }) => {
        try {

            // temporary we add to local storage. We have few pointes for requests
            if(localStorage.getItem('cuisine')){
                return [...JSON.parse(localStorage.getItem('cuisine') || '')]
            }

            const response = await fetch(getCuisineRecipes(country))

            if (!response.ok) {
                throw new Error('Something went wrong')
            }

            const data = await response.json()

            //temporary we add to local storage. We have few pointes for requests
            localStorage.setItem('cuisine', JSON.stringify(data.results))

            return data.results
        } catch (error) {
            console.log((error as Error).message)
            return rejectWithValue((error as Error).message)
        }
    }
)