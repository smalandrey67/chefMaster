export type SubMealDishType = {
   image: string;
   idDish: number;
   title: string;
}

export type SubMeal = {
   subMealId: string;
   subMealTitle: string;
   subMealDishes: SubMealDishType[];
}

export type WeekPlanType = {
   idWeek: string;
   weekDay: string;
   subMeals: SubMeal[]
}
export type PayloadDeleteType = {
   subMealId: string;
   idDish: number;
   idWeek: string;
}
export type MealPlanState = {
   weekPlan: WeekPlanType[];
   activeMealDay: WeekPlanType;
}
export type PayloadAddRecipeType = {
   idWeek: string;
   subMealId: string;
   preparedRecipe: SubMealDishType;
}
export type PayloadChangeActiveMealDay = {
   idWeek: string;
}
