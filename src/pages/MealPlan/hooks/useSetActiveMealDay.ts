import { useAppDispatch } from 'hooks/useRedux'
import { setActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice'

import { UseSetActiveMealDayReturnsType } from 'types/Hooks'

export const useSetActiveMealDay = (): UseSetActiveMealDayReturnsType => {
   const dispatch = useAppDispatch()

   const setActiveMealDayHandler = (idWeek: string): void => {
      dispatch(setActiveMealDay({ idWeek }))
   }

   return setActiveMealDayHandler
}