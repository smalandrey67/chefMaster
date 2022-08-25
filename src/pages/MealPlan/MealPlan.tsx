import { FC, useState, useEffect, useRef } from 'react'
import { BsFillBasket3Fill, BsSearch } from 'react-icons/bs'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

import { motion } from 'utils/constants/motion.constants'
import { useAppSelector, useAppDispatch } from 'hooks/useRedux'
import { selectActiveMealDay, selectWeekPlan } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'
import { selectCurrentUser } from 'store/slices/authSlice/authSlice.selectors'

import { Title, List, Input, Group, Flex, Label, Button, FlexGroup } from 'assets/styled/Reused.styled'
import {
   MealPlanItem, MealPlanWeekButton, MealPlanItemTitle, MealPlanSubMealTitle, MealPlanItemAdd,
   MealPlanSubMealAdd, MealPlanDishes, SubMealSubMenu, SubMealItem, MealPlanSubMenu, MealPlanSubMenuItem, MealPLanSubMenuItemDelete
} from './MealPlan.styled'

import { SubMenuItem } from './SubMenuItem'
import { MealDish } from './MealDish'
import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { BackButtonContainer } from 'components/containers/BackButtonContainer/BackButtonContainer'
import { NotAuthorisated } from 'components/reusable/NotAuthorisated/NotAuthorisated'

import { WeekPlanType } from 'store/slices/mealPlanSlice/mealPlanSlice.types'
import { changeActiveMealDay, setActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice'

import { SplideSlide } from '@splidejs/react-splide'
import { splideOptions } from 'utils/constants/splide.constants'
import { Splide } from '@splidejs/react-splide'

export const MealPlan: FC = () => {
   const dispatch = useAppDispatch()

   const weekPlan = useAppSelector(selectWeekPlan)
   const activeDay = useAppSelector(selectActiveMealDay)
   const user = useAppSelector(selectCurrentUser)

   const [addMealIndex, setAddMealIndex] = useState<number | null>(null)
   const [isAddSubMeal, setIsAddSubMeal] = useState<boolean>(false)

   const inputMealAddRef = useRef<HTMLInputElement>(null)

   useEffect(() => {
      dispatch(setActiveMealDay())
   }, [dispatch])

   useEffect(() => {
      if (isAddSubMeal && inputMealAddRef.current) {
         inputMealAddRef.current.focus()
      }
   }, [isAddSubMeal]) 

   const openSubMenuHandler = (index: number): void => {
      if (index === addMealIndex) {
         setAddMealIndex(null)

         return
      }
      setAddMealIndex(index)
   }

   const chooseDayHandler = (idWeek: string): void => {
      dispatch(changeActiveMealDay({ idWeek }))
      dispatch(setActiveMealDay())
   }

   const openSubMealField = (): void => {
      setIsAddSubMeal(prev => !prev)
   } 

   return Object.values(user || {}).length ?
      <SectionContainer motion={motion}>
         <BackButtonContainer>
            <Title>Meal Plan</Title>
         </BackButtonContainer>

         <Splide options={splideOptions(3)} style={{ marginBottom: '10px' }}>
            {weekPlan.map(dayPlan =>
               <SplideSlide key={dayPlan.idWeek} style={{ padding: '7px' }}>
                  <Group height='30px'>
                     <MealPlanWeekButton onClick={() => chooseDayHandler(dayPlan.idWeek)}>
                        {dayPlan.weekDay.slice(0, 3)}
                     </MealPlanWeekButton>
                  </Group>
               </SplideSlide>
            )}
         </Splide>

         <MealPlanItemTitle>
            {activeDay.weekDay}
            <MealPlanItemAdd onClick={openSubMealField}>+</MealPlanItemAdd>
         </MealPlanItemTitle>

         <Flex style={{ display: isAddSubMeal ? 'flex' : 'none' }}>
            <FlexGroup margin='0 10px 0 0' height='35px' flex='0 1 70%'>
               <Label>
                  <Input ref={inputMealAddRef} type='text' placeholder='...' name='sub meal' />
               </Label>
            </FlexGroup> 

            <FlexGroup height='35px' flex='0 1 30%'>
               <Button type='button' name='add sub meal'>add</Button>
            </FlexGroup>
         </Flex>


         <List>
            {Object.values(activeDay || {}).length && activeDay.subMeals.map((subMeal, index) =>
               <MealPlanItem key={subMeal.subMealId}>
                  <MealPlanSubMealTitle>
                     {subMeal.subMealTitle}
                     <MealPlanSubMealAdd onClick={() => openSubMenuHandler(index)}>
                        <BiDotsHorizontalRounded size='20' />
                     </MealPlanSubMealAdd>
                     <MealPlanSubMenu
                        animate={{ scale: addMealIndex === index ? 1 : 0 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                        style={{ display: addMealIndex === index ? 'block' : 'none' }}
                     >
                        <SubMenuItem idWeek={activeDay.idWeek} path='/favorites' title='Add Saved Recipe' Icon={BsFillBasket3Fill} />
                        <SubMenuItem idWeek={activeDay.idWeek} path='/searched' title='Search New Recipe' Icon={BsSearch} />
                        <MealPLanSubMenuItemDelete>Delete</MealPLanSubMenuItemDelete>
                     </MealPlanSubMenu>
                  </MealPlanSubMealTitle>

                  <MealPlanDishes>
                     {subMeal.subMealDishes.map(dish => <MealDish {...dish} key={dish.idDish} idWeek={activeDay.idWeek} />)}
                  </MealPlanDishes>
               </MealPlanItem>
            )}
         </List>
      </SectionContainer> : <NotAuthorisated />
}