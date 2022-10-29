import { useRedirect } from './useRedirect'
import { useAppDispatch } from './useRedux'

import { StateValuesType } from 'types/Location'
import { UseAddIntoWeekPlanReturnsType } from 'types/Hooks'
import { addRecipeIntoMeal, setActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice'
import { updateMealPlanThunk } from 'store/slices/mealPlanSlice/mealPlanThunk'

export const useAddIntoWeekPlan = (
  state: StateValuesType | null,
  id: number,
  title: string,
  image: string
): UseAddIntoWeekPlanReturnsType => {
  const dispatch = useAppDispatch()
  const navigateHandler = useRedirect()

  const addRecipeIntoWeekPlan = (): void => {
    if (state) {
      dispatch(addRecipeIntoMeal(state.idWeek, state.subMealId, id, title, image))
      dispatch(setActiveMealDay({ idWeek: state.idWeek }))
      dispatch(updateMealPlanThunk())

      navigateHandler('/meal/plan')
    }
  }

  return addRecipeIntoWeekPlan
}
