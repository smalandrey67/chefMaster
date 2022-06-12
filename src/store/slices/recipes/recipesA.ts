import axios from 'axios'
import { instance } from '../../../api/instance' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRecipes } from '../../../api/config'

import { RecipeType, RecipeResultType } from '../../../@types/Recipe'

export const recipesA = createAsyncThunk<RecipeResultType[], void, { rejectValue: string }>(
    'randomRecipe/recipesA',

    async (_, { rejectWithValue }) => {

        try{
            const response = await instance.get<RecipeType>(getRecipes())
            
            return response.data.recipes as RecipeResultType[]
        }catch(e){
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Can\'t download recipes. Server error')
        }
    }
)