import { createSlice, nanoid } from '@reduxjs/toolkit'

import { WeekPlanType } from 'types/MealPlan'

type MealPlanState = {
   weekPlan: WeekPlanType[];
}

const initialState: MealPlanState = { 
   weekPlan: [
      { id: nanoid(), weekDay: 'Monday', dishes: [
         { id: nanoid(), image: 'https://spoonacular.com/recipeImages/715594-556x370.jpg', title: 'Homemade Garlic and Basil French Fries' },
         { id: nanoid(), image: 'https://spoonacular.com/recipeImages/715594-556x370.jpg', title: 'Homemade Garlic and Basil French Fries' }
      ]},
      { id: nanoid(), weekDay: 'Tuesday', dishes: [] },
      { id: nanoid(), weekDay: 'Wednesday', dishes: [] },
      { id: nanoid(), weekDay: 'Thursday', dishes: [] },
      { id: nanoid(), weekDay: 'Friday', dishes: [] },
      { id: nanoid(), weekDay: 'Saturday', dishes: [] },
      { id: nanoid(), weekDay: 'Sunday', dishes: [] }
   ]
}

export const mealPlanSlice = createSlice({
   name: 'mealPlan',
   initialState,
   reducers: {

   }
})

export default mealPlanSlice.reducer