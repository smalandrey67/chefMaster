import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchedRecipes } from '../../config'

export const searchedRecipesAsync = createAsyncThunk(
    'searchedRecipes/searchedRecipesAsync',

    async (name: string, { rejectWithValue }) => {
        try {
            // temporary we add to local storage. We have few pointes for requests
            if(localStorage.getItem('searched')){
                return JSON.parse(localStorage.getItem('searched') || '')
            }

            const response = await fetch(getSearchedRecipes(name))

            if (!response.ok) {
                throw new Error('Something went wrong')
            }

            const data = await response.json()

           
            //temporary we add to local storage. We have few pointes for requests
            localStorage.setItem('searched', JSON.stringify(data.results))

            return data.results
        } catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)