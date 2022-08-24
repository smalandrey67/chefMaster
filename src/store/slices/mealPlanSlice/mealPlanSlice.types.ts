export type DishType = {
   idDish: string;
   image: string;
   title: string;
}

export type WeekPlanType = {
   idWeek: string;
   weekDay: string;
   dishes: DishType[]
}
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