import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { CuisineType, CuisineResultsType } from 'types/Cuisine'
import { RecipeType, RecipeResultType } from 'types/Recipe'
import { DetailsType } from 'types/Details'
import { NutritionType } from 'types/Nutrition'
import { AnswerType } from 'types/Answer'

export const recipesApi = createApi({
   reducerPath: 'recipesService',
   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),

   endpoints: (builder) => ({
      getRandomRecipes: builder.query<RecipeResultType[], void>({
         query: () => ({
            url: '/random',
            params: {
               number: 12,
               apiKey: process.env.REACT_APP_KEY
            }
         }),
         transformResponse: (response: RecipeType): RecipeResultType[] => response.recipes 
      }),
      getCuisine: builder.query<CuisineResultsType[], string | undefined>({
         query: (country) => ({
            url: '/complexSearch',
            params: {
               cuisine: country ?? '',
               apiKey: process.env.REACT_APP_KEY
            }
         }),
         transformResponse: (response: CuisineType): CuisineResultsType[] => response.results
      }),
      getDetails: builder.query<DetailsType, string | undefined>({
         query: (id) => ({
            url: `/${id ?? ''}/information`,
            params: {
               apiKey: process.env.REACT_APP_KEY
            }
         })
      }),
      getSearched: builder.query<CuisineResultsType[], {[key: string]: string}>({ // !!change type of arguments
         query: (params) => ({
            url: '/complexSearch',
            params: {
               ...params,
               apiKey: process.env.REACT_APP_KEY
            }
         }),
         transformResponse: (response: CuisineType): CuisineResultsType[] => response.results 
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
