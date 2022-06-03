import axios from 'axios'
import { instance } from '../../../api/instance' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getNutritions } from '../../../api/config'

import { NutritionType } from '../../../models/Nutrition'

export const nutritionsA = createAsyncThunk<NutritionType, string, { rejectValue: string }>(
    'nutritionRecipe/nutritionsA',

    async (id, { rejectWithValue }): Promise<NutritionType | any> => {
        try{
            const response = await instance.get<NutritionType>(getNutritions(id))

            return response.data as NutritionType   
        }catch(e){
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Can\'t download nutritions of this recipe. Server error')
        }
    }
)