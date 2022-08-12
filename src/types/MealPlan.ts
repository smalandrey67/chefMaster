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