import { FC, useEffect, useMemo } from 'react'
import { BsFillBasket3Fill, BsSearch } from 'react-icons/bs'
import { BiDotsHorizontalRounded, BiError } from 'react-icons/bi'
import { ToastContainer } from 'react-toastify'

import { motion } from 'utils/constants/motion.constants'
import { useAppSelector, useAppDispatch } from 'hooks/useRedux'
import { selectActiveMealDay, selectMealPlanUploadingError, selectMealPlanUploadingStatus } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'
import { selectCurrentUser } from 'store/slices/authSlice/authSlice.selectors'

import { Title, List, SpinnerWrapper, Spinner, ErrorMessage } from 'assets/styled/Reused.styled'
import {
   MealPlanItem, MealPlanItemTitle, MealPlanSubMealTitle, MealPlanItemAdd,
   MealPlanSubMealAdd, MealPlanDishes, MealPlanSubMenu, MealPLanSubMenuItemDelete
} from './MealPlan.styled'

import { Weeks } from './Weeks/Weeks'
import { SubMenuItem } from './SubMenuItem/SubMenuItem'
import { SubMealField } from './SubMealField/SubMealField'
import { Dish } from './Dish/Dish'
import { ResetMealPlanButton } from './ResetMealPlanButton/ResetMealPlanButton'
import { ErrorNoResult } from 'components/common/ErrorNoResult/ErrorNoResult.lazy'
import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { BackButtonContainer } from 'components/containers/BackButtonContainer/BackButtonContainer'
import { NotAuthorisated } from 'components/common/NotAuthorisated/NotAuthorisated'

import { useChangeStatusOfSubMealMenu } from './hooks/useChangeStatusOfSubMealMenu'
import { useSetActiveMealDay } from './hooks/useSetActiveMealDay'
import { useOpenMenuAddingRecipe } from './hooks/useOpenMenuAddingRecipe'
import { useDeleteSubMealMenu } from './hooks/useDeleteSubMealMenu'
import { stringCut } from 'utils/helpers/string.helper'

import { getMealPlanThunk } from 'store/slices/mealPlanSlice/mealPlanThunk'

import SpinnerBg from 'assets/images/icons/spinner-bg.svg'


export const MealPlan: FC = () => {
   const dispatch = useAppDispatch()

   const activeDay = useAppSelector(selectActiveMealDay)
   const user = useAppSelector(selectCurrentUser)
   const status = useAppSelector(selectMealPlanUploadingStatus)
   const error = useAppSelector(selectMealPlanUploadingError)

   const setActiveMealDayHandler = useSetActiveMealDay()
   const { openSubMealFieldHandler, resetStatusOfSubMealField, isSubMealMenu } = useChangeStatusOfSubMealMenu()
   const { menuAddingRecipeIndex, openMenuAddingRecipeHandler, resetStatusOfMenuAddingRecipe } = useOpenMenuAddingRecipe()
   const deleteSubMealMenuHandler = useDeleteSubMealMenu(setActiveMealDayHandler)

   const arrayFnOfClosingPopups = useMemo(() => {
      return [resetStatusOfMenuAddingRecipe, resetStatusOfSubMealField]
   }, [resetStatusOfMenuAddingRecipe, resetStatusOfSubMealField])

   useEffect(() => {
      arrayFnOfClosingPopups.forEach(fn => fn())
   }, [activeDay, arrayFnOfClosingPopups])

   useEffect(() => {
      dispatch(getMealPlanThunk())
   }, [dispatch])


   if (!Object.values(user || {}).length) {
      return <NotAuthorisated />
   }

   if (status === 'pending') {
      return (
         <SpinnerWrapper height='40vh'>
            < Spinner src={SpinnerBg} alt='spinner' />
         </SpinnerWrapper >
      )
   }

   return (
      <SectionContainer motion={motion}>
         <BackButtonContainer>
            <Title>Meal Plan</Title>
         </BackButtonContainer>

         <ResetMealPlanButton />
         <Weeks setActiveMealDayHandler={setActiveMealDayHandler} />

         <MealPlanItemTitle>
            {Object.values(activeDay || {}).length ? activeDay.weekDay : <div></div>}
            <MealPlanItemAdd onClick={openSubMealFieldHandler}>+</MealPlanItemAdd>
         </MealPlanItemTitle>

         <SubMealField isSubMealMenu={isSubMealMenu} />
         <List>
            {Object.values(activeDay || {}).length ? activeDay.subMeals.map((subMeal, index) =>
               <MealPlanItem key={subMeal.subMealId} {...motion}>
                  <MealPlanSubMealTitle>
                     {stringCut(subMeal.subMealTitle, 40)}
                     <MealPlanSubMealAdd onClick={() => openMenuAddingRecipeHandler(index)}>
                        <BiDotsHorizontalRounded size='25' />
                     </MealPlanSubMealAdd>
                     <MealPlanSubMenu
                        animate={{ scale: menuAddingRecipeIndex === index ? 1 : 0 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                        style={{
                           display: menuAddingRecipeIndex === index ? 'block' : 'none',
                           top: index + 1 === activeDay.subMeals.length ? -10 : -5,
                           right: index + 1 === activeDay.subMeals.length ? 35 : 33
                        }}
                     >
                        <SubMenuItem
                           subMealId={subMeal.subMealId} path='/favorites' title='Add Saved Recipe' Icon={BsFillBasket3Fill}
                        />
                        <SubMenuItem
                           subMealId={subMeal.subMealId} path='/searched' title='Search New Recipe' Icon={BsSearch}
                        />
                        <MealPLanSubMenuItemDelete onClick={() => deleteSubMealMenuHandler(subMeal.subMealId)}>
                           Delete
                        </MealPLanSubMenuItemDelete>
                     </MealPlanSubMenu>
                  </MealPlanSubMealTitle>

                  <MealPlanDishes>
                     {subMeal.subMealDishes.map(dish => <Dish {...dish} key={dish.idDish} subMealId={subMeal.subMealId} />)}
                  </MealPlanDishes>
               </MealPlanItem>
            ) : <ErrorNoResult height='30vh' description='Add your first sub meal' />}
            <ToastContainer role='alert' />
            {error && <ErrorMessage><BiError />Server Error</ErrorMessage>}
         </List>
      </SectionContainer>
   )
}