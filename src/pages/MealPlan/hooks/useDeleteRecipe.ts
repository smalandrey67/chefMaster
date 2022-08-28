import { MouseEvent } from 'react'

import { useAppDispatch } from 'hooks/useRedux'
import { deleteRecipeFromMealPlan, setActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice'

import { UseDeleteRecipeReturnsType } from 'types/Hooks'

export const useDeleteRecipe = (subMealId: string): UseDeleteRecipeReturnsType => {
   const dispatch = useAppDispatch()

   const deleteRecipeFromWeekPlanHandler = (e: MouseEvent<HTMLButtonElement>, idDish: number, idWeek: string): void => {
      e.stopPropagation()

      dispatch(deleteRecipeFromMealPlan({ subMealId, idDish, idWeek }))
      dispatch(setActiveMealDay({ idWeek }))
   }

   return deleteRecipeFromWeekPlanHandler
}