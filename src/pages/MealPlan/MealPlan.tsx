import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { deleteRecipeFromMealPlan } from 'store/slices/mealPlanSlice'
import { useRedirect } from 'hooks/useRedirect'
import { useAppSelector, useAppDispatch } from 'hooks/useRedux'
import { selectWeekPlan } from 'store/selectors'

import { Container, Title } from 'assets/styled/Reused.styled'
import {
   MealPlanEl, MealPlanList, MealPlanItem, MealPlanItemTitle, MealPlanItemAdd, MealPlanDishes,
   MealPlanDish,
   MealPlanSubMenu,
   MealPlanSubMenuItem,
   MealPlanSubMenuLink,
   MealPlanCloseButton
} from './MealPlan.styled'

import { BsFillBasket3Fill } from 'react-icons/bs'
import { IoMdCreate } from 'react-icons/io'
import { GrFormClose } from 'react-icons/gr'

import { BackButton } from 'components/reusable/BackButton/BackButton'
import { LazyImage } from 'components/reusable/LazyImage/LazyImage'

export const MealPlan: FC = () => {
   const dispatch = useAppDispatch()

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

   const deleteRecipeFromMeal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, idDish: string, idWeek: string): void => {
      e.stopPropagation()
      dispatch(deleteRecipeFromMealPlan({ idDish, idWeek }))
   }

   return (
      <MealPlanEl>
         <Container>
            <BackButton>
               <Title>Meal Plan</Title>
            </BackButton>

            <MealPlanList>
               {weekPlan.map((dayPlan, index) =>
                  <MealPlanItem key={dayPlan.idWeek}>
                     <MealPlanItemTitle>
                        {dayPlan.weekDay}
                        <MealPlanItemAdd onClick={() => addMealHandler(index)}>+</MealPlanItemAdd>

                        <MealPlanSubMenu style={{ display: addMealIndex === index ? 'block' : 'none' }}>
                           <MealPlanSubMenuItem>
                              <MealPlanSubMenuLink to='/favorites' state={{ prevPath: location.pathname, idWeek: dayPlan.idWeek }}>
                                 <BsFillBasket3Fill />
                                 Add Saved Recipe
                              </MealPlanSubMenuLink>
                           </MealPlanSubMenuItem>
                           <MealPlanSubMenuItem>
                              <MealPlanSubMenuLink style={{pointerEvents: 'none', opacity: '0.5'}} to='/favorites' state={{ prevPath: location.pathname, idWeek: dayPlan.idWeek }}>
                                 <IoMdCreate />
                                 Create New Recipe
                              </MealPlanSubMenuLink>
                           </MealPlanSubMenuItem>
                        </MealPlanSubMenu>

                     </MealPlanItemTitle>
                     <MealPlanDishes>
                        {dayPlan.dishes.map((dish) =>
                           <MealPlanDish onClick={() => navigateHandler('/details/', dish.idDish)} key={dish.idDish}>
                              <LazyImage
                                 image={dish.image}
                                 alt={dish.title}
                                 width='150px'
                                 height='100%'
                                 style={{ 'objectFit': 'contain', 'borderRadius': 'var(--br-radius)' }}
                              />
                              <MealPlanCloseButton onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => deleteRecipeFromMeal(e, dish.idDish, dayPlan.idWeek)}>
                                 <GrFormClose size='25' />
                              </MealPlanCloseButton>
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