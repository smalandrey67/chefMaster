import axios from 'axios'
import { instance } from '../../../api/instance' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getSearched } from '../../../api/config'

import { CuisineType, CuisineResultsType } from '../../../models/Cuisine'

export const searchedA = createAsyncThunk<CuisineResultsType[], string , { rejectValue: string }>(
    'searchedRecipes/searchedA',

    async (name, { rejectWithValue }) => {
       
        try {
            const response = await instance.get<CuisineType>(getSearched(name))

            return response.data.results as CuisineResultsType[]
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Can\'t find this product. Server error')
        }
    }
)