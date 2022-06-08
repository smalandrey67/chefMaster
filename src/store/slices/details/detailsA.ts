import axios from 'axios'
import { instance } from '../../../api/instance' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getDetails } from '../../../api/config'

import { DetailsType } from '../../../models/Details'

export const detailsA = createAsyncThunk<DetailsType, string, { rejectValue: string }>(
    'detailsRecipe/detailsA',

    async (id, { rejectWithValue }) => {
        try {
            const response = await instance.get<DetailsType>(getDetails(id))

            return response.data as DetailsType
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Can\'t download details of this recipe. Server error')
        }
    }
)