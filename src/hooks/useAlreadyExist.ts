import { selectWeekPlan } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'
import { useAppSelector } from './useRedux'

import { StateValuesType } from 'types/Location'

export const useAlreadyExist = (state: StateValuesType, id: number): boolean | undefined => {
   const weekPlan = useAppSelector(selectWeekPlan)

   const isAlreadyExistHandler = (): boolean | undefined => {
      if (state) {
         const currentWeek = weekPlan.find(week => week.idWeek === state.idWeek)

         if (currentWeek) {
            return
            // return currentWeek.dishes.some(dish => dish.idDish === String(id))
         }
      }
   }
   const isExist = isAlreadyExistHandler()

   return isExist
}