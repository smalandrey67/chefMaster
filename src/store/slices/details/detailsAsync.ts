import axios from 'axios'
import { instance } from '../../../api/instance' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getDetails } from '../../../api/config'

import { DetailsType } from '../../../@types/Details'

export const detailsAsync = createAsyncThunk<DetailsType, string, { rejectValue: string }>(
    'detailsRecipe/detailsAsync',

    async (id, { rejectWithValue }) => {
        try {
            const response = await instance.get<DetailsType>(getDetails(id))

            return response.data as DetailsType
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Could not download details of this recipe. Server error')
        }
    }
)