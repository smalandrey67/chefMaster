import { FC, memo } from 'react'

import { useResetMealPlan } from '../hooks/useResetMealPlan'
import * as Style from './ResetMealPlanButton.styled'

export const ResetMealPlanButton: FC = memo(() => {
   const resetMealPlanHandler = useResetMealPlan()
   
   return ( 
      <Style.ResetMealPlanWrapper>
         <Style.ResetMealPlanButtonEl onClick={resetMealPlanHandler}>
            Delete Meal Plan
         </Style.ResetMealPlanButtonEl>
      </Style.ResetMealPlanWrapper>
   )
})


