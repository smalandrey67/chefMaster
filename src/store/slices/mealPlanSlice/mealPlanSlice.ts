import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

import { mealPlan } from 'utils/constants/mealPlan.constants'
import { getIndexOfCurrentDay } from 'utils/helpers/getIndexOfCurrentDay.helper'
import { getMealPlanThunk } from './mealPlanThunk'
import { PayloadDeleteType, PayloadChangeActiveMealDay, MealPlanState, PayloadAddRecipeType, WeekPlanType } from './mealPlanSlice.types'

const initialState: MealPlanState = {
   weekPlan: [],
   activeMealDay: {} as WeekPlanType,
   error: null,
   status: null
}

export const mealPlanSlice = createSlice({
   name: 'mealPlan',
   initialState,
   reducers: {
      addRecipeIntoMeal: {
         reducer: (state, { payload }: PayloadAction<PayloadAddRecipeType>): void => {
            state.weekPlan = state.weekPlan.map(week => {
               if (week.idWeek === payload.idWeek) {
                  return {
                     ...week,
                     subMeals: week.subMeals.map(subMeal => {
                        if (subMeal.subMealId === payload.subMealId) {
                           subMeal.subMealDishes.push(payload.preparedRecipe)
                        }

                        return subMeal
                     })
                  }
               }
               return week
            })
         },
         prepare: (idWeek: string, subMealId: string, id: number, title: string, image: string) => {
            return {
               payload: {
                  idWeek,
                  subMealId,
                  preparedRecipe: { idDish: id, title, image }
               }
            }
         }
      },
      deleteRecipeFromMealPlan: (state, { payload }: PayloadAction<PayloadDeleteType>): void => {
         state.weekPlan = state.weekPlan.map(week => {
            if (week.idWeek === payload.idWeek) {
               return {
                  ...week,
                  subMeals: week.subMeals.map(subMeal => {
                     if (subMeal.subMealId === payload.subMealId) {
                        return {
                           ...subMeal,
                           subMealDishes: subMeal.subMealDishes.filter(dish => dish.idDish !== payload.idDish)
                        }
                     }
                     return subMeal
                  })
               }
            }
            return week
         })
      },
      setActiveMealDay: (state, { payload }: PayloadAction<PayloadChangeActiveMealDay>): void => {
         const activeDay = state.weekPlan.find(dayPlan => dayPlan.idWeek === payload.idWeek)

         if (activeDay) {
            state.activeMealDay = activeDay
         }
      },
      addSubMealMenu: (state, { payload }: PayloadAction<{ subMealMenuTitle: string, idWeek: string }>): void => {
         state.weekPlan = state.weekPlan.map(week => {
            if (week.idWeek === payload.idWeek) {
               return {
                  ...week,
                  subMeals: [
                     ...week.subMeals,
                     { subMealId: nanoid(), subMealTitle: payload.subMealMenuTitle, subMealDishes: [] }
                  ]
               }
            }

            return week
         })
      },
      deleteSubMealMenu: (state, { payload }: PayloadAction<{ subMealId: string, idWeek: string }>): void => {
         state.weekPlan = state.weekPlan.map(week => {
            if (week.idWeek === payload.idWeek) {
               return {
                  ...week,
                  subMeals: week.subMeals.filter(subMeal => subMeal.subMealId !== payload.subMealId)
               }
            }
            return week
         })
      },
      resetMealPlan: (state): void => {
         state.weekPlan = [...mealPlan]
      }
   },
   extraReducers: (builder): void => {
      builder
         .addCase(getMealPlanThunk.pending, (state): void => {
            state.status = 'pending'
            state.error = null
         })
         .addCase(getMealPlanThunk.fulfilled, (state, { payload }): void => {
            if (payload) {
               state.weekPlan = payload
               
               if (!Object.values(state.activeMealDay || {}).length) {
                  state.activeMealDay = payload[getIndexOfCurrentDay()]
               }

               state.status = 'fulfilled'
            }
         })
         .addCase(getMealPlanThunk.rejected, (state, { payload }): void => {
            if (payload) {
               state.error = payload
            }
         })
   }
})

export default mealPlanSlice.reducer
export const {
   addRecipeIntoMeal,
   deleteRecipeFromMealPlan,
   setActiveMealDay,
   addSubMealMenu,
   deleteSubMealMenu,
   resetMealPlan
} = mealPlanSlice.actions