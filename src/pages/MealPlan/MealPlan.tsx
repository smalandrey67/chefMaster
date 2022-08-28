import { FC } from 'react'
import { BsFillBasket3Fill, BsSearch } from 'react-icons/bs'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { ToastContainer } from 'react-toastify'

import { motion } from 'utils/constants/motion.constants'
import { useAppSelector } from 'hooks/useRedux'
import { selectActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'
import { selectCurrentUser } from 'store/slices/authSlice/authSlice.selectors'

import { Title, List } from 'assets/styled/Reused.styled'
import {
   MealPlanItem, MealPlanItemTitle, MealPlanSubMealTitle, MealPlanItemAdd,
   MealPlanSubMealAdd, MealPlanDishes, MealPlanSubMenu, MealPLanSubMenuItemDelete
} from './MealPlan.styled'

import { MealPlanWeeks } from './MealPlanWeeks'
import { SubMenuItem } from './SubMenuItem'
import { SubMealMenuField } from './SubMealMenuField'
import { MealDish } from './MealDish'
import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { BackButtonContainer } from 'components/containers/BackButtonContainer/BackButtonContainer'
import { NotAuthorisated } from 'components/reusable/NotAuthorisated/NotAuthorisated'

import { useSetActiveMealDay } from './hooks/useSetActiveMealDay'
import { useOpenMenuAddingRecipe } from './hooks/useOpenMenuAddingRecipe'
import { useSubMealFunctionality } from './hooks/useSubMealFunctionality'
import { stringCut } from 'utils/helpers/string.helper'


export const MealPlan: FC = () => {
   const activeDay = useAppSelector(selectActiveMealDay)
   const user = useAppSelector(selectCurrentUser)

   const setActiveMealDayHandler = useSetActiveMealDay()
   const { menuAddingRecipeIndex, openMenuAddingRecipeHandler } = useOpenMenuAddingRecipe()
   const { isSubMealMenu, openSubMealFieldHandler, inputSubMealAddRef, addSubMealMenuHandler, deleteSubMealMenuHandler } = useSubMealFunctionality(activeDay.idWeek, setActiveMealDayHandler)

   return Object.values(user || {}).length ?
      <SectionContainer motion={motion}>
         <BackButtonContainer>
            <Title>Meal Plan</Title>
         </BackButtonContainer>

         <MealPlanWeeks activeDayIdWeek={activeDay.idWeek} setActiveMealDayHandler={setActiveMealDayHandler} />

         <MealPlanItemTitle>
            {Object.values(activeDay || {}).length && activeDay.weekDay}
            <MealPlanItemAdd onClick={openSubMealFieldHandler}>+</MealPlanItemAdd>
         </MealPlanItemTitle>

         <SubMealMenuField
            isSubMealMenu={isSubMealMenu}
            inputSubMealAddRef={inputSubMealAddRef}
            addSubMealMenuHandler={addSubMealMenuHandler}
         />

         <List>
            {Object.values(activeDay || {}).length && activeDay.subMeals.map((subMeal, index) =>
               <MealPlanItem key={subMeal.subMealId}>
                  <MealPlanSubMealTitle>
                     {stringCut(subMeal.subMealTitle, 40)}
                     <MealPlanSubMealAdd onClick={() => openMenuAddingRecipeHandler(index)}>
                        <BiDotsHorizontalRounded size='20' />
                     </MealPlanSubMealAdd>
                     <MealPlanSubMenu
                        animate={{ scale: menuAddingRecipeIndex === index ? 1 : 0 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                        style={{ display: menuAddingRecipeIndex === index ? 'block' : 'none' }}
                     >
                        <SubMenuItem
                           subMealId={subMeal.subMealId}
                           idWeek={activeDay.idWeek}
                           path='/favorites'
                           title='Add Saved Recipe'
                           Icon={BsFillBasket3Fill}
                        />
                        <SubMenuItem
                           subMealId={subMeal.subMealId}
                           idWeek={activeDay.idWeek}
                           path='/searched'
                           title='Search New Recipe'
                           Icon={BsSearch}
                        />
                        <MealPLanSubMenuItemDelete onClick={() => deleteSubMealMenuHandler(subMeal.subMealId)}>Delete</MealPLanSubMenuItemDelete>
                     </MealPlanSubMenu>
                  </MealPlanSubMealTitle>

                  <MealPlanDishes>
                     {subMeal.subMealDishes.map(dish =>
                        <MealDish {...dish} key={dish.idDish} subMealId={subMeal.subMealId} idWeek={activeDay.idWeek} />
                     )}
                  </MealPlanDishes>
                  <ToastContainer />
               </MealPlanItem>
            )}
         </List>
      </SectionContainer> : <NotAuthorisated />
}