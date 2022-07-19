import { nanoid } from '@reduxjs/toolkit'

export type GroupType = {
   text: string;
   query: string;
}

export type DishType = {
   name: string;
   active: boolean;
   id: string;
}

export type filterCategoriesTypes = {
   group: GroupType;
   id: string;
   type: DishType[];
}

enum DietsName {
   KETOGENIC = 'ketogenic',
   VEGETARIAN = 'vegetarian',
   PESCETARIAN = 'pescetarian',
   PALEO = 'paleo',
   WHOLE30 = 'whole30',
}

enum DishesName {
   SALAD = 'salad',
   DESSERT = 'dessert',
   BREAKFAST = 'breakfast',
   SOUP = 'soup',
   SNACK = 'snack',
}

export const filterCategories: filterCategoriesTypes[] = [
   {
      group: { text: 'diets', query: 'diet' },
      id: nanoid(),
      type: [
         { name: DietsName.KETOGENIC, active: false, id: nanoid() },
         { name: DietsName.VEGETARIAN, active: false, id: nanoid() },
         { name: DietsName.PESCETARIAN, active: false, id: nanoid() },
         { name: DietsName.PALEO, active: false, id: nanoid() },
         { name: DietsName.WHOLE30, active: false, id: nanoid() }
      ]
   },
   {
      group: { text: 'dishes', query: 'type' },
      id: nanoid(),
      type: [
         { name: DishesName.SALAD, active: false, id: nanoid() },
         { name: DishesName.DESSERT, active: false, id: nanoid() },
         { name: DishesName.BREAKFAST, active: false, id: nanoid() },
         { name: DishesName.SOUP, active: false, id: nanoid() },
         { name: DishesName.SNACK, active: false, id: nanoid() }
      ]
   }
]