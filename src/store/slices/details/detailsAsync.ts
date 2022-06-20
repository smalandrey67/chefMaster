import axios from 'axios'
import { instance } from '../../../api/instance' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getDetails } from '../../../api/config'

import { DetailsType } from '../../../@types/Details'

export const detailsAsync = createAsyncThunk<DetailsType, string, { rejectValue: string }>(
    'details/detailsAsync',

    async (id, { rejectWithValue }) => {
        try {
            // if (localStorage.getItem('details')) {
            //     return JSON.parse(localStorage.getItem('details') || '')
            // }

            const response = await instance.get<DetailsType>(getDetails(id))
   
            // localStorage.setItem('details', JSON.stringify(response.data))

            return response.data
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Could not download details of this recipe. Server error')
        }
    }
)