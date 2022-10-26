import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { config } from 'config'

import { RecipeResultType, RecipesResponseType, RandomRecipeResultType, RandomRecipesResponseType } from 'types/Recipe'
import { DetailsType } from 'types/Details'
import { NutritionType } from 'types/Nutrition'
import { AnswerResponseType } from 'types/Answer'
import { FilterParamsType } from 'types/Params'

export const recipesApi = createApi({
  reducerPath: 'recipesService',
  baseQuery: fetchBaseQuery({ baseUrl: config.spoonacular }),

  endpoints: (builder) => ({
    getRandomRecipes: builder.query<RandomRecipeResultType[], void>({
      query: () => ({
        url: '/random',
        params: {
          number: 12,
          apiKey: config.apiKey
        }
      }),
      transformResponse: (response: RandomRecipesResponseType): RandomRecipeResultType[] => response.recipes
    }),
    getCuisine: builder.query<RecipeResultType[], string | undefined>({
      query: (country) => ({
        url: '/complexSearch',
        params: {
          cuisine: country ?? '',
          apiKey: config.apiKey
        }
      }),
      transformResponse: (response: RecipesResponseType): RecipeResultType[] => response.results
    }),
    getDetails: builder.query<DetailsType, string | undefined>({
      query: (id) => ({
        url: `/${id ?? ''}/information`,
        params: {
          apiKey: config.apiKey
        }
      })
    }),
    getSearched: builder.query<RecipeResultType[], FilterParamsType>({
      query: (params) => ({
        url: '/complexSearch',
        params: {
          ...params,
          number: 20,
          apiKey: config.apiKey
        }
      }),
      transformResponse: (response: RecipesResponseType): RecipeResultType[] => response.results
    }),
    getNutritions: builder.query<NutritionType, string | undefined>({
      query: (id) => ({
        url: `/${id ?? ''}/nutritionWidget.json`,
        params: {
          apiKey: config.apiKey
        }
      })
    }),
    getAnswer: builder.query<AnswerResponseType, string>({
      query: (question) => ({
        url: `/quickAnswer?q=${question.split(' ').join('+')}`,
        params: {
          apiKey: config.apiKey
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
