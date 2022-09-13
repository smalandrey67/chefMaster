import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { deleteSubMealMenu } from 'store/slices/mealPlanSlice/mealPlanSlice'
import { selectActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'
import { updateMealPlanThunk } from 'store/slices/mealPlanSlice/mealPlanThunk'

import { UseDeleteSubMealMenuReturnsType } from 'types/Hooks'
import { handleAlert } from 'utils/helpers/handleAlert.helper'

export const useDeleteSubMealMenu = (setActiveMealDay: (idWeek: string) => void): UseDeleteSubMealMenuReturnsType => {
   const dispatch = useAppDispatch()
   const activeDay = useAppSelector(selectActiveMealDay)
  
   const deleteSubMealMenuHandler = (subMealId: string): void => {
      dispatch(deleteSubMealMenu({ subMealId, idWeek: activeDay.idWeek }))
      setActiveMealDay(activeDay.idWeek)
      dispatch(updateMealPlanThunk())

      handleAlert()('SubMeal was deleted', 'success')
   }

   return deleteSubMealMenuHandler
}