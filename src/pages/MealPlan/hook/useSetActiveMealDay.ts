import { useCallback } from 'react'

import { useAppDispatch } from 'hooks/useRedux'
import { setActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice'

import { UseSetActiveMealDayReturnsType } from 'types/Hooks'

export const useSetActiveMealDay = (): UseSetActiveMealDayReturnsType => {
  const dispatch = useAppDispatch()

  const setActiveMealDayHandler = useCallback(
    (idWeek: string): void => {
      dispatch(setActiveMealDay({ idWeek }))
    },
    [dispatch]
  )

  return setActiveMealDayHandler
}
