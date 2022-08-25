import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { mealPLan } from 'utils/constants/mealPlan.constants'
import { PayloadDeleteType, PayloadChangeActiveMealDay, MealPlanState, PayloadAddRecipeType, WeekPlanType } from './mealPlanSlice.types'

const initialState: MealPlanState = {
   weekPlan: localStorage.getItem('weekPlan') ? JSON.parse(localStorage.getItem('weekPlan') || '') : mealPLan,
   activeMealDayId: mealPLan[0].idWeek,
   activeMealDay: {} as WeekPlanType
}

export const mealPlanSlice = createSlice({
   name: 'mealPlan',
   initialState,
   reducers: {
      addRecipeIntoMeal: (state, { payload }: PayloadAction<{ idWeek: string, id: number, title: string, image: string }>): void => { 
         console.log(payload)
      },
      // addRecipeIntoMeal: {
      //    reducer: (state, { payload }: PayloadAction<PayloadAddRecipeType>): void => {
      //       console.log(payload)
            
      //       state.weekPlan = state.weekPlan.map(dayPlan => {
      //          if (dayPlan.idWeek === payload.idWeek) {
      //             dayPlan.
      //          }

      //          return dayPlan
      //       })

      //       localStorage.setItem('weekPlan', JSON.stringify(state.weekPlan))
      //    },
      //    prepare: (idWeek: string, id: number, title: string, image: string) => {
      //       return {
      //          payload: {
      //             idWeek,
      //             plannedRecipe: { idDish: String(id), title, image }
      //          }
      //       }
      //    }
      // },
      deleteRecipeFromMealPlan: (state, { payload }: PayloadAction<PayloadDeleteType>): void => {
         console.log('works')
         // state.weekPlan = state.weekPlan.map(week => {
         //    if (week.idWeek === payload.idWeek) {
         //       return {
         //          ...week,
         //          dishes: week.dishes.filter(dish => dish.idDish !== payload.idDish)
         //       }
         //    }

         //    return week
         // })

         // localStorage.setItem('weekPlan', JSON.stringify(state.weekPlan))
      },
      changeActiveMealDay: (state, { payload }: PayloadAction<PayloadChangeActiveMealDay>): void => {
         state.activeMealDayId = payload.idWeek
      },
      setActiveMealDay: (state): void => {
         if (state.activeMealDayId) {
            const activeDay = state.weekPlan.find(dayPlan => dayPlan.idWeek === state.activeMealDayId)

            if (activeDay) {
               state.activeMealDay = activeDay
            }
         }
      }
   }
})

export default mealPlanSlice.reducer
export const { addRecipeIntoMeal, deleteRecipeFromMealPlan, changeActiveMealDay, setActiveMealDay } = mealPlanSlice.actions