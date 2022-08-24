import { nanoid } from '@reduxjs/toolkit'

import { WeekPlanType } from 'store/slices/mealPlanSlice/mealPlanSlice.types'

export const mealPLan: readonly WeekPlanType[] = [
   { idWeek: nanoid(), weekDay: 'Monday', dishes: [] },
   { idWeek: nanoid(), weekDay: 'Tuesday', dishes: [] },
   { idWeek: nanoid(), weekDay: 'Wednesday', dishes: [] },
   { idWeek: nanoid(), weekDay: 'Thursday', dishes: [] },
   { idWeek: nanoid(), weekDay: 'Friday', dishes: [] },
   { idWeek: nanoid(), weekDay: 'Saturday', dishes: [] },
   { idWeek: nanoid(), weekDay: 'Sunday', dishes: [] }
]