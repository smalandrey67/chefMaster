export type DishType = {
   id: string;
   image: string;
   title: string;
}

export type WeekPlanType = {
   id: string;
   weekDay: string;
   dishes: DishType[]
}