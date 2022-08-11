import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { mealPLan } from 'utils/constants/mealPlan.constants'

import { WeekPlanType, DishType } from 'types/MealPlan'

type PayloadDeleteType = {
   idDish: string;
   idWeek: string;
}

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
            const currentWeek = state.weekPlan.find(week => week.idWeek === payload.idWeek)

            if (currentWeek) {
               const isRecipeAlreadyExist = currentWeek.dishes.some(item => item.idDish === payload.plannedRecipe.idDish)

               if (isRecipeAlreadyExist) return

               state.weekPlan = state.weekPlan.map(dayPlan => {
                  if (dayPlan.idWeek === payload.idWeek) {
                     dayPlan.dishes.push(payload.plannedRecipe)
                  }
   
                  return dayPlan
               })
   
               localStorage.setItem('weekPlan', JSON.stringify(state.weekPlan))
            }
         },
         prepare: (idWeek: string, id: number, title: string, image: string) => {
            return {
               payload: {
                  idWeek,
                  plannedRecipe: { idDish: String(id), title, image }
               }
            }
         }
      },
      deleteRecipeFromMealPlan: (state, { payload }: PayloadAction<PayloadDeleteType>): void => {
         state.weekPlan = state.weekPlan.map(week => {
            if (week.idWeek === payload.idWeek) {
               return {
                  ...week,
                  dishes: week.dishes.filter(dish => dish.idDish !== payload.idDish) 
               }
            } 

            return week
         })

         localStorage.setItem('weekPlan', JSON.stringify(state.weekPlan))
      }
   }
})

export default mealPlanSlice.reducer
export const { addRecipeIntoMeal, deleteRecipeFromMealPlan } = mealPlanSlice.actions