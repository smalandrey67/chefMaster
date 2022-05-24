import axios from 'axios'
import { instance } from '../../api' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRandomRecipes } from '../../config'

import { RecipeType, RecipeResultType } from '../../types/Recipe'

export const randomRecipeAsync = createAsyncThunk<RecipeResultType[], void, { rejectValue: string }>(
    'randomRecipe/randomRecipeAsync',

    async (_, { rejectWithValue }): Promise<RecipeResultType[] | any> => {

        try{
            if (localStorage.getItem('recipes')) {
                return [...JSON.parse(localStorage.getItem('recipes') || '')]
            }

            const response = await instance.get<RecipeType>(getRandomRecipes())

            localStorage.setItem('recipes', JSON.stringify(response.data.recipes))

            return response.data.recipes as RecipeResultType[]
        }catch(e){
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Can\'t download recipes. Server error')
        }
    }
)