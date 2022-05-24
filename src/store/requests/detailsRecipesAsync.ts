import axios from 'axios'
import { instance } from '../../api' 

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRecipeInformation } from '../../config'

import { DetailsType } from '../../types/Details'

export const detailsRecipeAsync = createAsyncThunk<DetailsType, string, { rejectValue: string }>(
    'detailsRecipe/detailsRecipeAsync',

    async (id, { rejectWithValue }): Promise<DetailsType | any> => {
        try {

            if (localStorage.getItem('details')) {
                return JSON.parse(localStorage.getItem('details') || '')
            }

            const response = await instance.get<DetailsType>(getRecipeInformation(id))

            localStorage.setItem('details', JSON.stringify(response.data))

            return response.data as DetailsType

        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Can\'t download details of this recipe. Server error')
        }
    }
)