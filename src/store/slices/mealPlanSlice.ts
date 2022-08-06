import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { mealPLan } from 'utils/constants/mealPlan.constants'

import { WeekPlanType, DishType } from 'types/MealPlan'

type MealPlanState = {
   weekPlan: WeekPlanType[];
}

type PayloadAddRecipeType = {
   idWeek: string;
   plannedRecipe: DishType;
}

const initialState: MealPlanState = {
   weekPlan: localStorage.getItem('weekPlan') ? JSON.parse(localStorage.getItem('weekPlan') || '') : mealPLan
}

export const mealPlanSlice = createSlice({
   name: 'mealPlan',
   initialState,
   reducers: {
      addRecipeIntoMeal: {
         reducer: (state, { payload }: PayloadAction<PayloadAddRecipeType>): void => {
            state.weekPlan = state.weekPlan.map(dayPlan => {
               if (dayPlan.id === payload.idWeek) {
                  dayPlan.dishes.push(payload.plannedRecipe)
               }

               return dayPlan
            })

            localStorage.setItem('weekPlan', JSON.stringify(state.weekPlan))
         },
         prepare: (idWeek: string, id: number, title: string, image: string) => {
            return {
               payload: {
                  idWeek,
                  plannedRecipe: { id: String(id), title, image}
               }
            }
         }
      },
      deleteRecipeFromMealPlan: (state, action): void => {
         console.log('test')  
      }
   }
})

export default mealPlanSlice.reducer
export const { addRecipeIntoMeal } = mealPlanSlice.actions