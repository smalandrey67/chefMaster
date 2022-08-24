import { useRedirect } from './useRedirect'
import { useAppDispatch } from './useRedux'

import { StateValuesType } from 'types/Location'
import { UseAddIntoWeekPlanReturnsType } from 'types/Hooks'
import { addRecipeIntoMeal } from 'store/slices/mealPlanSlice/mealPlanSlice'

export const useAddIntoWeekPlan = (
   state: StateValuesType, id: number, title: string, image: string
): UseAddIntoWeekPlanReturnsType => {

   const dispatch = useAppDispatch()
   const navigateHandler = useRedirect()

   const addRecipeIntoWeekPlan = (): void => {
      if (state) {
         dispatch(addRecipeIntoMeal(state.idWeek, id, title, image))
         navigateHandler('/meal/plan')
      }
   }

   return addRecipeIntoWeekPlan
}