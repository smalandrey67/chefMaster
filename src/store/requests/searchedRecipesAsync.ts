import axios from 'axios'
import { instance } from '../../api' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearchedRecipes } from '../../config'

import { CuisineType, CuisineResultsType } from '../../types/Cuisine'

export const searchedRecipesAsync = createAsyncThunk<CuisineResultsType[], string, { rejectValue: string }>(
    'searchedRecipes/searchedRecipesAsync',

    async (name, { rejectWithValue }): Promise<CuisineResultsType[] | any> => {

        try {

            if (localStorage.getItem('searched')) {
                return JSON.parse(localStorage.getItem('searched') || '')
            }

            const response = await instance.get<CuisineType>(getSearchedRecipes(name))

            localStorage.setItem('searched', JSON.stringify(response.data.results))

            return response.data.results as CuisineResultsType[]
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Can\'t find this product. Server error')
        }
    }
)