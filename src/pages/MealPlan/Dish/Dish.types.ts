import { SubMealDishType } from 'store/slices/mealPlanSlice/mealPlanSlice.types'

export type DishProps = SubMealDishType & { subMealId: string; }