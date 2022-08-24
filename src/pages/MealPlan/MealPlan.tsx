import { FC, useState } from 'react'
import { BsFillBasket3Fill, BsSearch } from 'react-icons/bs'

import { motion } from 'utils/constants/motion.constants'
import { useAppSelector } from 'hooks/useRedux'
import { selectWeekPlan } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'
import { selectCurrentUser } from 'store/slices/authSlice/authSlice.selectors'

import { Title, List } from 'assets/styled/Reused.styled'
import {
   MealPlanItem, MealPlanItemTitle, MealPlanItemAdd,
   MealPlanDishes, MealPlanSubMenu
} from './MealPlan.styled'

import { SubMenuItem } from './SubMenuItem'
import { MealDish } from './MealDish'
import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { BackButtonContainer } from 'components/containers/BackButtonContainer/BackButtonContainer'
import { NotAuthorisated } from 'components/reusable/NotAuthorisated/NotAuthorisated'

export const MealPlan: FC = () => {
   const weekPlan = useAppSelector(selectWeekPlan)
   const user = useAppSelector(selectCurrentUser)
   const [addMealIndex, setAddMealIndex] = useState<number | null>(null)

   const openSubMenuHandler = (index: number): void => {
      if (index === addMealIndex) {
         setAddMealIndex(null)

         return
      }
      setAddMealIndex(index)
   }

   return Object.values(user || {}).length ?
      <SectionContainer motion={motion}>
         <BackButtonContainer>
            <Title>Meal Plan</Title>
         </BackButtonContainer>
         <List>
            {weekPlan.map((dayPlan, index) =>
               <MealPlanItem key={dayPlan.idWeek}>
                  <MealPlanItemTitle>
                     {dayPlan.weekDay}
                     <MealPlanItemAdd onClick={() => openSubMenuHandler(index)}>+</MealPlanItemAdd>
                  </MealPlanItemTitle>

                  <MealPlanSubMenu
                     animate={{ scale: addMealIndex === index ? 1 : 0 }}
                     transition={{ type: 'tween', duration: 0.2 }}
                     style={{ display: addMealIndex === index ? 'block' : 'none' }}
                  >
                     <SubMenuItem idWeek={dayPlan.idWeek} path='/favorites' title='Add Saved Recipe' Icon={BsFillBasket3Fill} />
                     <SubMenuItem idWeek={dayPlan.idWeek} path='/searched' title='Search New Recipe' Icon={BsSearch} />
                  </MealPlanSubMenu>

                  <MealPlanDishes>
                     {dayPlan.dishes.map(dish => <MealDish {...dish} key={dish.idDish} idWeek={dayPlan.idWeek} />)}
                  </MealPlanDishes>
               </MealPlanItem>
            )}
         </List>
      </SectionContainer> : <NotAuthorisated />
}