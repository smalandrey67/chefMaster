import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRecipeInformation } from '../../config'

import { IDetails } from '../../models/IDetails'

export const detailsRecipeAsync = createAsyncThunk<IDetails, string, { rejectValue: string }>(
    'detailsRecipe/detailsRecipeAsync',

    async (id, { rejectWithValue }) => {
        // temporary we add to local storage. We have few pointes for requests
        if (localStorage.getItem('details')) {
            return JSON.parse(localStorage.getItem('details') || '')
        }

        const response = await fetch(getRecipeInformation(id))

        if (!response.ok) {
            return rejectWithValue('Can\'t download details of this recipe. Server error.')
        }

        const data = await response.json()

        // //temporary we add to local storage. We have few pointes for requests
        localStorage.setItem('details', JSON.stringify(data))

        return (await data) as IDetails
    }
)