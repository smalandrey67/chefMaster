import { nanoid } from '@reduxjs/toolkit'

import { WeekPlanType } from 'types/MealPlan'

export const mealPLan: readonly WeekPlanType[] = [
   { id: nanoid(), weekDay: 'Monday', dishes: [] },
   { id: nanoid(), weekDay: 'Tuesday', dishes: [] },
   { id: nanoid(), weekDay: 'Wednesday', dishes: [] },
   { id: nanoid(), weekDay: 'Thursday', dishes: [] },
   { id: nanoid(), weekDay: 'Friday', dishes: [] },
   { id: nanoid(), weekDay: 'Saturday', dishes: [] },
   { id: nanoid(), weekDay: 'Sunday', dishes: [] }
]
