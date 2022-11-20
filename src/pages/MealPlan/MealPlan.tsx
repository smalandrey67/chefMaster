import { FC, useEffect, useMemo } from 'react'
import { BsFillBasket3Fill, BsSearch } from 'react-icons/bs'
import { BiDotsHorizontalRounded, BiError } from 'react-icons/bi'
import { ToastContainer } from 'react-toastify'

import { motion } from 'constants/motion'
import { useAppSelector, useAppDispatch } from 'hooks/useRedux'
import {
  selectActiveMealDay,
  selectMealPlanUploadingError,
  selectMealPlanUploadingStatus
} from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'
import { selectCurrentUser } from 'store/slices/authSlice/authSlice.selectors'

import SpinnerBg from 'assets/images/icons/spinner-bg.svg'
import * as ReusedStyle from 'assets/styled/Reused.styled'
import * as Style from './MealPlan.styled'

import { Weeks } from './Weeks/Weeks'
import { SubMenuItem } from './SubMenuItem/SubMenuItem'
import { SubMealField } from './SubMealField/SubMealField'
import { Dish } from './Dish/Dish'
import { ResetMealPlanButton } from './ResetMealPlanButton/ResetMealPlanButton'
import { ErrorNoResult } from 'components/common/ErrorNoResult/ErrorNoResult.lazy'
import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { BackButtonContainer } from 'components/containers/BackButtonContainer/BackButtonContainer'

import { useChangeStatusOfSubMealMenu } from './hook/useChangeStatusOfSubMealMenu'
import { useSetActiveMealDay } from './hook/useSetActiveMealDay'
import { useOpenMenuAddingRecipe } from './hook/useOpenMenuAddingRecipe'
import { useDeleteSubMealMenu } from './hook/useDeleteSubMealMenu'
import { stringCut } from 'utils/stringCut'

import { getMealPlanThunk } from 'store/slices/mealPlanSlice/mealPlanThunk'

export const MealPlan: FC = () => {
  const dispatch = useAppDispatch()

  const activeDay = useAppSelector(selectActiveMealDay)
  const user = useAppSelector(selectCurrentUser)
  const status = useAppSelector(selectMealPlanUploadingStatus)
  const error = useAppSelector(selectMealPlanUploadingError)

  const setActiveMealDayHandler = useSetActiveMealDay()
  const { openSubMealFieldHandler, resetStatusOfSubMealField, isSubMealMenu } = useChangeStatusOfSubMealMenu()
  const { menuAddingRecipeIndex, openMenuAddingRecipeHandler, resetStatusOfMenuAddingRecipe } =
    useOpenMenuAddingRecipe()
  const deleteSubMealMenuHandler = useDeleteSubMealMenu(setActiveMealDayHandler)

  const arrayFnOfClosingPopups = useMemo(() => {
    return [resetStatusOfMenuAddingRecipe, resetStatusOfSubMealField]
  }, [resetStatusOfMenuAddingRecipe, resetStatusOfSubMealField])

  useEffect(() => {
    arrayFnOfClosingPopups.forEach((fn) => fn())
  }, [activeDay, arrayFnOfClosingPopups])

  useEffect(() => {
    if (user) {
      dispatch(getMealPlanThunk())
    }
  }, [user, dispatch])

  if (status === 'pending') {
    return (
      <ReusedStyle.SpinnerWrapper height='40vh'>
        <ReusedStyle.Spinner src={SpinnerBg} alt='spinner' />
      </ReusedStyle.SpinnerWrapper>
    )
  }

  return (
    <SectionContainer motion={motion}>
      <BackButtonContainer buttonTitle='back'>
        <ReusedStyle.Title>Meal Plan</ReusedStyle.Title>
      </BackButtonContainer>

      <ResetMealPlanButton />
      <Weeks setActiveMealDayHandler={setActiveMealDayHandler} />

      <Style.MealPlanItemTitle>
        {Object.values(activeDay || {}).length ? activeDay.weekDay : <div></div>}
        <Style.MealPlanItemAdd onClick={openSubMealFieldHandler}>+</Style.MealPlanItemAdd>
      </Style.MealPlanItemTitle>

      <SubMealField isSubMealMenu={isSubMealMenu} />
      <ReusedStyle.List>
        {Object.values(activeDay || {}).length ? (
          activeDay.subMeals.map((subMeal, index) => (
            <Style.MealPlanItem key={subMeal.subMealId} {...motion}>
              <Style.MealPlanSubMealTitle>
                {stringCut(subMeal.subMealTitle, 40)}
                <Style.MealPlanSubMealAdd onClick={() => openMenuAddingRecipeHandler(index)}>
                  <BiDotsHorizontalRounded size='25' />
                </Style.MealPlanSubMealAdd>
                <Style.MealPlanSubMenu
                  animate={{ scale: menuAddingRecipeIndex === index ? 1 : 0 }}
                  transition={{ type: 'tween', duration: 0.2 }}
                  style={{
                    display: menuAddingRecipeIndex === index ? 'block' : 'none',
                    top: index + 1 === activeDay.subMeals.length ? -10 : -5,
                    right: index + 1 === activeDay.subMeals.length ? 35 : 33
                  }}
                >
                  <SubMenuItem
                    subMealId={subMeal.subMealId}
                    path='/favorites'
                    title='Add Saved Recipe'
                    Icon={BsFillBasket3Fill}
                  />
                  <SubMenuItem
                    subMealId={subMeal.subMealId}
                    path='/searched'
                    title='Search New Recipe'
                    Icon={BsSearch}
                  />
                  <Style.MealPLanSubMenuItemDelete onClick={() => deleteSubMealMenuHandler(subMeal.subMealId)}>
                    Delete
                  </Style.MealPLanSubMenuItemDelete>
                </Style.MealPlanSubMenu>
              </Style.MealPlanSubMealTitle>

              <Style.MealPlanDishes>
                {subMeal.subMealDishes.map((dish) => (
                  <Dish {...dish} key={dish.idDish} subMealId={subMeal.subMealId} />
                ))}
              </Style.MealPlanDishes>
            </Style.MealPlanItem>
          ))
        ) : (
          <ErrorNoResult height='30vh' description='Add your first sub meal' />
        )}
        <ToastContainer role='alert' />
        {error && (
          <ReusedStyle.ErrorMessage>
            <BiError />
            Server Error
          </ReusedStyle.ErrorMessage>
        )}
      </ReusedStyle.List>
    </SectionContainer>
  )
}
