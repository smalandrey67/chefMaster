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
   idDish: string;
   idWeek: string;
}
export type MealPlanState = {
   weekPlan: WeekPlanType[];
   activeMealDayId: string;
   activeMealDay: WeekPlanType;
}
export type PayloadAddRecipeType = {
   idWeek: string;
   plannedRecipe: SubMeal;
}
export type PayloadChangeActiveMealDay = {
   idWeek: string;
}
