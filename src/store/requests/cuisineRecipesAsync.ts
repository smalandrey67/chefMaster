import axios from 'axios'
import { instance } from '../../api'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCuisineRecipes } from '../../config'

import { CuisineType, CuisineResultsType } from '../../types/Cuisine'

export const cuisineRecipesAsync = createAsyncThunk<CuisineResultsType[], string, { rejectValue: string }>(
    'cuisineRecipes/cuisineRecipesAsync',

    async (country, { rejectWithValue }): Promise<CuisineResultsType[] | any> => {
        try {

            // temporary we add to local storage. We have few pointes for requests
            if (localStorage.getItem('cuisine')) {
                return JSON.parse(localStorage.getItem('cuisine') || '')
            }

            const response = await instance.get<CuisineType>(getCuisineRecipes(country))

            localStorage.setItem('cuisine', JSON.stringify(response.data.results))

            return response.data.results as CuisineResultsType[]
        } catch (e) {
            if (axios.isAxiosError(e)){
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Can\'t download this cuisine. Server error')
        }
    }
)