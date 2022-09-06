import { RootState } from 'store/store'

export const selectWeekPlan = (state: RootState) => state.mealPlan.weekPlan
export const selectActiveMealDay = (state: RootState) => state.mealPlan.activeMealDay
