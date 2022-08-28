import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

import { mealPLan } from 'utils/constants/mealPlan.constants'
import { PayloadDeleteType, PayloadChangeActiveMealDay, MealPlanState, PayloadAddRecipeType } from './mealPlanSlice.types'

const initialState: MealPlanState = {
   weekPlan: localStorage.getItem('weekPlan') ? JSON.parse(localStorage.getItem('weekPlan') || '') : mealPLan,
   activeMealDay: localStorage.getItem('activeDay') ? JSON.parse(localStorage.getItem('activeDay') || '') : mealPLan[new Date().getDay()]
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
          
            localStorage.setItem('weekPlan', JSON.stringify(state.weekPlan))
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
            localStorage.setItem('activeDay', JSON.stringify(state.activeMealDay))
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

         localStorage.setItem('weekPlan', JSON.stringify(state.weekPlan))
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
         localStorage.setItem('weekPlan', JSON.stringify(state.weekPlan))
      }
   }
})

export default mealPlanSlice.reducer
export const { 
   addRecipeIntoMeal, 
   deleteRecipeFromMealPlan, 
   setActiveMealDay, 
   addSubMealMenu, 
   deleteSubMealMenu 
} = mealPlanSlice.actions