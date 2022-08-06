import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useRedirect } from 'hooks/useRedirect'
import { useAppSelector } from 'hooks/useRedux'
import { selectWeekPlan } from 'store/selectors'

import { Container, Title } from 'assets/styled/Reused.styled'
import { MealPlanEl, MealPlanList, MealPlanItem, MealPlanItemTitle, MealPlanItemAdd, MealPlanDishes,
   MealPlanDish, 
   MealPlanDishImage,
   MealPlanSubMenu, 
   MealPlanSubMenuItem,
   MealPlanSubMenuLink
} from './MealPlan.styled'

import { BsFillBasket3Fill } from 'react-icons/bs'
import { IoMdCreate } from 'react-icons/io'
import { BackButton } from 'components/reusable/BackButton/BackButton'

export const MealPlan: FC = () => {
   const weekPlan = useAppSelector(selectWeekPlan)
   const navigateHandler = useRedirect()

   const [addMealIndex, setAddMealIndex] = useState<number | null>(null)
   const location = useLocation()

   const addMealHandler = (index: number): void => {
      if (index === addMealIndex) {
         setAddMealIndex(null)

         return
      }
      setAddMealIndex(index)
   }

   return (
      <MealPlanEl>
         <Container>
            <BackButton>
               <Title>Meal Plan</Title>
            </BackButton>

            <MealPlanList>
               {weekPlan.map((dayPlan, index) =>
                  <MealPlanItem key={dayPlan.id}>
                     <MealPlanItemTitle>
                        {dayPlan.weekDay}
                        <MealPlanItemAdd onClick={() => addMealHandler(index)}>+</MealPlanItemAdd>

                        <MealPlanSubMenu style={{ display: addMealIndex === index ? 'block' : 'none' }}>
                           <MealPlanSubMenuItem>
                              <MealPlanSubMenuLink to='/favorites' state={{ prevPath: location.pathname, idWeek: dayPlan.id }}>
                                 <BsFillBasket3Fill />
                                 Add Saved Recipe
                              </MealPlanSubMenuLink> 
                           </MealPlanSubMenuItem>
                           <MealPlanSubMenuItem>
                              <MealPlanSubMenuLink to='/favorites' state={{ prevPath: location.pathname, idWeek: dayPlan.id }}>
                                 <IoMdCreate />
                                 Create New Recipe
                              </MealPlanSubMenuLink>
                           </MealPlanSubMenuItem>
                        </MealPlanSubMenu>

                     </MealPlanItemTitle>
                     <MealPlanDishes>
                        {dayPlan.dishes.map((dish) => 
                           <MealPlanDish onClick={() => navigateHandler('/details/', dish.id)} key={dish.id}>
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