import { nanoid } from '@reduxjs/toolkit'

import { WeekPlanType } from 'store/slices/mealPlanSlice/mealPlanSlice.types'

export const mealPLan: readonly WeekPlanType[] = [
   { 
      idWeek: nanoid(), 
      weekDay: 'Monday', 
      subMeals: [
         { subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [
            { image: 'https://spoonacular.com/recipeImages/715594-556x370.jpg', idDish: 633754, title: 'product' }
         ]}
      ] 
   },
   {
      idWeek: nanoid(),
      weekDay: 'Tuesday',
      subMeals: [
         { subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] },
         { subMealId: nanoid(), subMealTitle: 'Lunch', subMealDishes: [] },
         { subMealId: nanoid(), subMealTitle: 'Dinner', subMealDishes: [] }
      ]
   },
   {
      idWeek: nanoid(),
      weekDay: 'Wednesday',
      subMeals: [
         { subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] },
         { subMealId: nanoid(), subMealTitle: 'Lunch', subMealDishes: [] },
         { subMealId: nanoid(), subMealTitle: 'Dinner', subMealDishes: [] }
      ]
   },
   {
      idWeek: nanoid(),
      weekDay: 'Thursday',
      subMeals: [
         { subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] },
         { subMealId: nanoid(), subMealTitle: 'Lunch', subMealDishes: [] },
         { subMealId: nanoid(), subMealTitle: 'Dinner', subMealDishes: [] }
      ]
   },
   {
      idWeek: nanoid(),
      weekDay: 'Friday',
      subMeals: [
         { subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] },
         { subMealId: nanoid(), subMealTitle: 'Lunch', subMealDishes: [] },
         { subMealId: nanoid(), subMealTitle: 'Dinner', subMealDishes: [] }
      ]
   },
   {
      idWeek: nanoid(),
      weekDay: 'Saturday',
      subMeals: [
         { subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] },
         { subMealId: nanoid(), subMealTitle: 'Lunch', subMealDishes: [] },
         { subMealId: nanoid(), subMealTitle: 'Dinner', subMealDishes: [] }
      ]
   },
   {
      idWeek: nanoid(),
      weekDay: 'Sunday',
      subMeals: [
         { subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] },
         { subMealId: nanoid(), subMealTitle: 'Lunch', subMealDishes: [] },
         { subMealId: nanoid(), subMealTitle: 'Dinner', subMealDishes: [] }
      ]
   }
]