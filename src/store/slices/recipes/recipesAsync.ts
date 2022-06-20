import axios from 'axios'
import { instance } from '../../../api/instance' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRecipes } from '../../../api/config'

import { RecipeType, RecipeResultType } from '../../../@types/Recipe'

export const recipesAsync = createAsyncThunk<RecipeResultType[], void, { rejectValue: string }>(
    'recipes/recipesAsync',

    async (_, { rejectWithValue }) => {
        try{
            // const response = await instance.get<RecipeType>(getRecipes())
            const response = await instance.get<RecipeType>('')
            
            return []
            // return response.data.recipes
        }catch(e){
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Can\'t download recipes. Server error')
        }
    }
)