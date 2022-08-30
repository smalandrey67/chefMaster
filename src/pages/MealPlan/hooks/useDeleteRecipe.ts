import { MouseEvent } from 'react'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { deleteRecipeFromMealPlan, setActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice'
import { selectActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'

import { UseDeleteRecipeReturnsType } from 'types/Hooks'

export const useDeleteRecipe = (subMealId: string): UseDeleteRecipeReturnsType => {
   const dispatch = useAppDispatch()
   const activeDay = useAppSelector(selectActiveMealDay)

   const deleteRecipeFromWeekPlanHandler = (e: MouseEvent<HTMLButtonElement>, idDish: number): void => {
      e.stopPropagation()

      dispatch(deleteRecipeFromMealPlan({ subMealId, idDish, idWeek: activeDay.idWeek }))
      dispatch(setActiveMealDay({ idWeek: activeDay.idWeek }))
   }

   return deleteRecipeFromWeekPlanHandler
}