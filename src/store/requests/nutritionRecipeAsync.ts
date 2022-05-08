import { createAsyncThunk } from '@reduxjs/toolkit'
import { getNutritionRecipe } from '../../config'

export const nutritionRecipeAsync = createAsyncThunk(
    'nutritionRecipe/nutritionRecipeAsync',

    async (id: string, { rejectWithValue }) => {
        try {
            // temporary we add to local storage. We have few pointes for requests
            if(localStorage.getItem('nutrition')){
                return JSON.parse(localStorage.getItem('nutrition') || '')
            }

            const response = await fetch(getNutritionRecipe(id))

            if (!response.ok) {
                throw new Error('Something went wrong')
            }

            const data = await response.json()

    
            // //temporary we add to local storage. We have few pointes for requests
            localStorage.setItem('nutrition', JSON.stringify(data))

            return data
        } catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)