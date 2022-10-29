import { RootState } from 'store/store'
import { WeekPlanType } from './mealPlanSlice.types'

export const selectWeekPlan = (state: RootState): WeekPlanType[] => state.mealPlan.weekPlan
export const selectActiveMealDay = (state: RootState): WeekPlanType => state.mealPlan.activeMealDay
export const selectMealPlanUploadingError = (state: RootState): string | null => state.mealPlan.error
export const selectMealPlanUploadingStatus = (state: RootState): 'pending' | 'fulfilled' | null => state.mealPlan.status
