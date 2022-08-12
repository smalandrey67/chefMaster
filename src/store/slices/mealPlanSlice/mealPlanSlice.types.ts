import { DishType, WeekPlanType } from 'types/MealPlan'

export type PayloadDeleteType = {
   idDish: string;
   idWeek: string;
}

export type MealPlanState = {
   weekPlan: WeekPlanType[];
}

export type PayloadAddRecipeType = {
   idWeek: string;
   plannedRecipe: DishType;
}