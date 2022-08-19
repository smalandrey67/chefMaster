import { FC, useState } from 'react'
import { BsFillBasket3Fill, BsSearch } from 'react-icons/bs'

import { motion } from 'utils/constants/motion.constants'
import { useAppSelector } from 'hooks/useRedux'
import { selectWeekPlan } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'
import { selectUser } from 'store/slices/authSlice/authSlice.selectors'

import { Title } from 'assets/styled/Reused.styled'
import { MealPlanList, MealPlanItem, MealPlanItemTitle, MealPlanItemAdd, MealPlanDishes,
   MealPlanSubMenu
} from './MealPlan.styled'

import { SubMenuItem } from './SubMenuItem'
import { MealDish } from './MealDish'
import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { BackButton } from 'components/reusable/BackButton/BackButton'
import { NotAuthorisation } from 'components/reusable/NotAuthorisation/NotAuthorisation'

export const MealPlan: FC = () => {
   const weekPlan = useAppSelector(selectWeekPlan)
   const user = useAppSelector(selectUser)
   const [addMealIndex, setAddMealIndex] = useState<number | null>(null)

   const addMealHandler = (index: number): void => {
      if (index === addMealIndex) {
         setAddMealIndex(null)

         return
      }
      setAddMealIndex(index)
   }

   return Object.values(user || {}).length ?
      <SectionContainer motion={motion}>
         <BackButton>
            <Title>Meal Plan</Title>
         </BackButton>
         <MealPlanList>
            {weekPlan.map((dayPlan, index) =>
               <MealPlanItem key={dayPlan.idWeek}>
                  <MealPlanItemTitle>
                     {dayPlan.weekDay}
                     <MealPlanItemAdd onClick={() => addMealHandler(index)}>+</MealPlanItemAdd>
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
         </MealPlanList>
      </SectionContainer> : <NotAuthorisation />
}
