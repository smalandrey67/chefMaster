import { FC, memo } from 'react'

import { useResetMealPlan } from '../hooks/useResetMealPlan'
import { ResetMealPlanWrapper, ResetMealPlanButtonEl } from './ResetMealPlanButton.styled'

export const ResetMealPlanButton: FC = memo(() => {
   const resetMealPlanHandler = useResetMealPlan()
   
   return ( 
      <ResetMealPlanWrapper>
         <ResetMealPlanButtonEl onClick={resetMealPlanHandler}>
            Delete Meal Plan
         </ResetMealPlanButtonEl>
      </ResetMealPlanWrapper>
   )
})


