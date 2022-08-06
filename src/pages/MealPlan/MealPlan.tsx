import { FC } from 'react'

import { useAppSelector } from 'hooks/useRedux'
import { selectWeekPlan } from 'store/selectors'

import { Container, Title } from 'assets/styled/Reused.styled'
import { MealPlanEl, MealPlanList, MealPlanItem, MealPlanItemTitle, MealPlanItemAdd, MealPlanDishes,
   MealPlanDish, 
   MealPlanDishImage,
} from './MealPlan.styled'

import { BackButton } from 'components/reusable/BackButton/BackButton'

export const MealPlan: FC = () => {
   const weekPlan = useAppSelector(selectWeekPlan)

   return (
      <MealPlanEl>
         <Container>
            <BackButton>
               <Title>Meal Plan</Title>
            </BackButton>

            <MealPlanList>
               {weekPlan.map((dayPlan) =>
                  <MealPlanItem key={dayPlan.id}>
                     <MealPlanItemTitle>
                        {dayPlan.weekDay}
                        <MealPlanItemAdd>+</MealPlanItemAdd>
                     </MealPlanItemTitle>

                     <MealPlanDishes>
                        {dayPlan.dishes.map((dish) => 
                           <MealPlanDish key={dish.id}>
                              <MealPlanDishImage src={dish.image} alt={dish.title}/>
                           </MealPlanDish>
                        )}
                     </MealPlanDishes> 
                  </MealPlanItem>
               )}
            </MealPlanList>

         </Container>
      </MealPlanEl>
   )
}