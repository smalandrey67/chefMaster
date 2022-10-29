import { nanoid } from '@reduxjs/toolkit'

import { WeekPlanType } from 'store/slices/mealPlanSlice/mealPlanSlice.types'

export const mealPlan: readonly WeekPlanType[] = [
  {
    idWeek: nanoid(),
    weekDay: 'Sunday',
    subMeals: [{ subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] }]
  },
  {
    idWeek: nanoid(),
    weekDay: 'Monday',
    subMeals: [{ subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] }]
  },
  {
    idWeek: nanoid(),
    weekDay: 'Tuesday',
    subMeals: [{ subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] }]
  },
  {
    idWeek: nanoid(),
    weekDay: 'Wednesday',
    subMeals: [{ subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] }]
  },
  {
    idWeek: nanoid(),
    weekDay: 'Thursday',
    subMeals: [{ subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] }]
  },
  {
    idWeek: nanoid(),
    weekDay: 'Friday',
    subMeals: [{ subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] }]
  },
  {
    idWeek: nanoid(),
    weekDay: 'Saturday',
    subMeals: [{ subMealId: nanoid(), subMealTitle: 'Breakfast', subMealDishes: [] }]
  }
]
