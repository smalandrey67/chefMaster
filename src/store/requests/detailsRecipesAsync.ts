import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRecipeInformation } from '../../config'

export const detailsRecipeAsync = createAsyncThunk(
    'detailsRecipe/detailsRecipeAsync',

    async (id: number, { rejectWithValue }) => {
        try {
            // temporary we add to local storage. We have few pointes for requests
            if(localStorage.getItem('details')){
                return JSON.parse(localStorage.getItem('details') || '')
            }

            const response = await fetch(getRecipeInformation(id))

            if (!response.ok) {
                throw new Error('Something went wrong')
            }

            const data = await response.json()

            // //temporary we add to local storage. We have few pointes for requests
            localStorage.setItem('details', JSON.stringify(data))

            return data
        } catch (error) {
            console.log((error as Error).message)
            return rejectWithValue((error as Error).message)
        }
    }
)