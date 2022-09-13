import { RootState } from 'store/store'

export const selectWeekPlan = (state: RootState) => state.mealPlan.weekPlan
export const selectActiveMealDay = (state: RootState) => state.mealPlan.activeMealDay
export const selectMealPlanUploadingError = (state: RootState) => state.mealPlan.error
export const selectMealPlanUploadingStatus = (state: RootState) => state.mealPlan.status



