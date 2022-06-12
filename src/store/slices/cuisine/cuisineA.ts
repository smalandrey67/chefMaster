import axios from 'axios'
import { instance } from '../../../api/instance'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCuisine } from '../../../api/config'

import { CuisineType, CuisineResultsType } from '../../../@types/Cuisine'

export const cuisineA = createAsyncThunk<CuisineResultsType[], string, { rejectValue: string }>(
    'cuisineRecipes/cuisineA',

    async (country, { rejectWithValue }) => {
        try {
            const response = await instance.get<CuisineType>(getCuisine(country))

            return response.data.results as CuisineResultsType[]
        } catch (e) {
            if (axios.isAxiosError(e)){
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Can\'t download this cuisine. Server error')
        }
    }
)