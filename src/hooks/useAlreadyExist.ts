import { selectWeekPlan } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'
import { useAppSelector } from './useRedux'

import { StateValuesType } from 'types/Location'

export const useAlreadyExist = (state: StateValuesType, id: number): boolean | undefined => {
   const weekPlan = useAppSelector(selectWeekPlan)

   const isAlreadyExistHandler = (): boolean | undefined => {
      if (state) {
         const currentWeek = weekPlan.find(week => week.idWeek === state.idWeek)

         if (currentWeek) {
            const currentSubMeal = currentWeek.subMeals.find(subMeal => subMeal.subMealId === state.subMealId)

            if (currentSubMeal) {
               return currentSubMeal.subMealDishes.some(dish => dish.idDish === id)
            } 
            
            return
         }
      }
   }
   const isExist = isAlreadyExistHandler()

   return isExist
}