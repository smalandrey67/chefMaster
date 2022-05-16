import { createAsyncThunk } from '@reduxjs/toolkit'
import { getNutritionRecipe } from '../../config'

import { INutrition } from '../../models/INutrition'

export const nutritionRecipeAsync = createAsyncThunk<INutrition, string, { rejectValue: string }>(
    'nutritionRecipe/nutritionRecipeAsync',

    async (id, { rejectWithValue }) => {
   
            // temporary we add to local storage. We have few pointes for requests
            if(localStorage.getItem('nutrition')){
                return JSON.parse(localStorage.getItem('nutrition') || '')
            }

            const response = await fetch(getNutritionRecipe(id))

            if (!response.ok) {
                return rejectWithValue('Can\'t download nutritions of this recipe. Server error.')
            }

            const data = await response.json()

            // //temporary we add to local storage. We have few pointes for requests
            localStorage.setItem('nutrition', JSON.stringify(data))

            return (await data) as INutrition
       
    }
)