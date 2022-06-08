import { nanoid } from '@reduxjs/toolkit'

export type DietType = {
   diet: string
   active: boolean
   id: string
}

enum DietsName {
   KETOGENIC = 'ketogenic',
   VEGETARIAN = 'vegetarian',
   PESCETARIAN = 'pescetarian',
   PALEO = 'paleo',
   WHOLE30 = 'Whole30'
}

export const diets: DietType[] = [
   { diet: DietsName.KETOGENIC, active: false, id: nanoid() },
   { diet: DietsName.VEGETARIAN, active: false, id: nanoid() },
   { diet: DietsName.PESCETARIAN, active: false, id: nanoid() },
   { diet: DietsName.PALEO, active: false, id: nanoid() },
   { diet: DietsName.WHOLE30, active: false, id: nanoid() },
]