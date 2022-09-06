import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useSelector } from 'react-redux'

import { resetMealPlan, setActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice'
import { selectActiveMealDay, selectWeekPlan } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'

import { mealPLan } from 'utils/constants/mealPlan.constants'
import { handleAlert } from 'utils/helpers/handleAlert.helper'

export const useResetMealPlan = () => {
   const weekPlan = useSelector(selectWeekPlan)
   const activeDay = useAppSelector(selectActiveMealDay)
   const dispatch = useAppDispatch()

   const resetMealPlanHandler = () => {
      const isAlreadyMealPlanReset = JSON.stringify(mealPLan) === JSON.stringify(weekPlan)

      if (isAlreadyMealPlanReset) {
         handleAlert()('Plan Already Reset', 'warning')
         return
      }

      const isDeleteTheMealPlan = window.confirm('Are you sure? You will never be able to get this back')

      if (isDeleteTheMealPlan) {
         dispatch(resetMealPlan())
         dispatch(setActiveMealDay({ idWeek: activeDay.idWeek }))
      }
   }

   return resetMealPlanHandler
}