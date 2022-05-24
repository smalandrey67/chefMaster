import axios from 'axios'
import { instance } from '../../api' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getNutritionRecipe } from '../../config'

import { NutritionType } from '../../types/Nutrition'

export const nutritionRecipeAsync = createAsyncThunk<NutritionType, string, { rejectValue: string }>(
    'nutritionRecipe/nutritionRecipeAsync',

    async (id, { rejectWithValue }): Promise<NutritionType | any> => {
        try{
            // temporary we add to local storage. We have few pointes for requests
            if (localStorage.getItem('nutrition')) {
                return JSON.parse(localStorage.getItem('nutrition') || '')
            }

            const response = await instance.get<NutritionType>(getNutritionRecipe(id))

            localStorage.setItem('nutrition', JSON.stringify(response.data))
            return response.data as NutritionType
            
        }catch(e){
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Can\'t download nutritions of this recipe. Server error')
        }
    }
)