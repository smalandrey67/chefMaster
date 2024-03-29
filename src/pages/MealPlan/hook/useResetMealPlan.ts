import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useSelector } from 'react-redux'

import { resetMealPlan, setActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice'
import { selectActiveMealDay, selectWeekPlan } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'

import { handleAlert } from 'utils/handleAlert'

import { UseResetMealPlanReturnsType } from 'types/Hooks'
import { updateMealPlanThunk } from 'store/slices/mealPlanSlice/mealPlanThunk'

export const useResetMealPlan = (): UseResetMealPlanReturnsType => {
  const weekPlan = useSelector(selectWeekPlan)
  const activeDay = useAppSelector(selectActiveMealDay)
  const dispatch = useAppDispatch()

  const resetMealPlanHandler = (): void => {
    let isAlreadyMealPlanReset = true

    weekPlan.forEach((week) => {
      if (week.subMeals.length > 1) {
        isAlreadyMealPlanReset = false
      }
    })

    weekPlan.forEach((week) => {
      week.subMeals.forEach((subMealType) => {
        if (subMealType.subMealDishes.length > 0) {
          isAlreadyMealPlanReset = false
        }
      })
    })

    if (isAlreadyMealPlanReset) {
      handleAlert('Plan Already Reset', 'warning')
      return
    }

    const isDeleteTheMealPlan = window.confirm('Are you sure? You will never be able to get this back')

    if (isDeleteTheMealPlan) {
      dispatch(resetMealPlan())
      dispatch(setActiveMealDay({ idWeek: activeDay.idWeek }))
      dispatch(updateMealPlanThunk())

      handleAlert('Meal Plan was reseted', 'success')
    }
  }

  return resetMealPlanHandler
}
