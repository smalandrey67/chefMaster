import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { CuisineType } from '../@types/Cuisine'
import { RecipeType } from '../@types/Recipe'
import { DetailsType } from '../@types/Details'
import { NutritionType } from '../@types/Nutrition'
import { AnswerType } from '../@types/Answer'
import { ParamsType } from '../@types/Params'

export const recipesApi = createApi({
   reducerPath: 'recipesService',
   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),

   endpoints: (builder) => ({
      getRandomRecipes: builder.query<RecipeType, void>({
         query: () => ({
            url: '/random',
            params: {
               number: 12,
               apiKey: process.env.REACT_APP_KEY
            }
         })
      }),
      getCuisine: builder.query<CuisineType, string | undefined>({
         query: (country) => ({
            url: '/complexSearch',
            params: {
               cuisine: country ?? '',
               apiKey: process.env.REACT_APP_KEY
            }
         })
      }),
      getDetails: builder.query<DetailsType, string | undefined>({
         query: (id) => ({
            url: `/${id ?? ''}/information`,
            params: {
               apiKey: process.env.REACT_APP_KEY
            }
         })
      }),
      getSearched: builder.query<CuisineType, ParamsType>({
         query: (params) => ({
            url: '/complexSearch',
            params: {
               ...params,
               apiKey: process.env.REACT_APP_KEY
            }
         })
      }),
      getNutritions: builder.query<NutritionType, string | undefined>({
         query: (id) => ({
            url: `/${id ?? ''}/nutritionWidget.json`,
            params: {
               apiKey: process.env.REACT_APP_KEY
            }
         })
      }),
      getAnswer: builder.query<AnswerType, string>({
         query: (question) => ({
            url: `/quickAnswer?q=${question.split(' ').join('+')}`,
            params: {
               apiKey: process.env.REACT_APP_KEY
            }
         })
      })
   })
})

export const { 
   useGetRandomRecipesQuery,
   useGetCuisineQuery,
   useGetDetailsQuery,
   useGetSearchedQuery,
   useGetNutritionsQuery,
   useLazyGetAnswerQuery
} = recipesApi
