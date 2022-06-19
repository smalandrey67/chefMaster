import axios from 'axios'
import { instance } from '../../../api/instance'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCuisine } from '../../../api/config'

import { CuisineType, CuisineResultsType } from '../../../@types/Cuisine'

export const cuisineAsync = createAsyncThunk<CuisineResultsType[], string, { rejectValue: string }>(
    'cuisine/cuisineAsync',

    async (country, { rejectWithValue }) => {
        try {
            const response = await instance.get<CuisineType>(getCuisine(country))

            return response.data.results
        } catch (e) {
            if (axios.isAxiosError(e)){
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Can\'t download this cuisine. Server error')
        }
    }
)