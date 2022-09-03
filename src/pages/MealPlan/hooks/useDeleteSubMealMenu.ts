import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { deleteSubMealMenu } from 'store/slices/mealPlanSlice/mealPlanSlice'
import { selectActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'

import { UseDeleteSubMealMenuReturnsType } from 'types/Hooks'
import { handleAlert } from 'utils/helpers/handleAlert.helpers'

export const useDeleteSubMealMenu = (setActiveMealDay: (idWeek: string) => void): UseDeleteSubMealMenuReturnsType => {
   const dispatch = useAppDispatch()
   const activeDay = useAppSelector(selectActiveMealDay)
  
   const deleteSubMealMenuHandler = (subMealId: string): void => {
      dispatch(deleteSubMealMenu({ subMealId, idWeek: activeDay.idWeek }))
      setActiveMealDay(activeDay.idWeek)

      handleAlert()('SubMeal was deleted', 'success')
   }

   return deleteSubMealMenuHandler
}