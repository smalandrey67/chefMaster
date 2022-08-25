import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Button, List, Flex, Input } from 'assets/styled/Reused.styled'

export const MealPlanItem = styled.li`
   padding: 15px 0 10px 0;
   position: relative;
   &:not(:last-child) {
      border-bottom: 1px solid var(--color-black);
   } 
`

export const MealPlanWeekButton = styled(Button)`
   flex: 33.333%;
   font-size: var(--fs-sl);
   font-weight: var(--fw-bold);
`

export const MealPlanItemTitle = styled.h4`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 0 10px 0;
   font-size: var(--fs-md);
   position: relative;
`
export const MealPlanSubMealTitle = styled(MealPlanItemTitle)`
   font-weight: var(--fw-regular);
   font-size: var(--fw-sm);
`

export const MealPlanItemAdd = styled(Button)`
   width: 25px;
   height: 24px;
   padding: 0;
   border-radius: 50%;
   background-color: var(--color-categories);
   color: var(--color-white);
   display: block;
`
export const MealPlanSubMealAdd = styled.button`
   width: 25px;
   height: 20px;
`
export const MealPlanSubMenu = styled(List)`
   display: none;
   position: absolute;
   top: 20px;
   right: 0;
   background-color: var(--color-white);
   box-shadow: var(--shadow);
   min-height: 70px;
   padding: 15px;
   border-radius: var(--br-radius); 
   z-index: 55;
   display: flex;
   align-items: center;
   justify-content: center;
`
export const SubMealSubMenu = styled(MealPlanSubMenu)`
   top: 35px;
   flex-direction: column;
   align-items: flex-start;
`

export const MealPlanSubMenuItem = styled.li`
   &:not(:last-child){
      margin-bottom: 15px;
   }
`
export const MealPLanSubMenuItemDelete = styled.li`
   display: flex;
   justify-content: flex-start;
   font-size: var(--fs-sm);
   font-weight: var(--fw-semiBold);
   color: var(--color-error);
`

export const SubMealInputWrapper = styled.div`
   position: relative;
   height: 15px;
   width: 15px;
`
export const SubMealInput = styled(Input)`
   position: absolute;
   top: 0;
   left: 0;  
`

export const MealPlanSubMenuLink = styled(Link)`
   display: grid;
   grid-auto-flow: column;
   align-items: center;
   gap: 5px;
   font-size: var(--fs-sm);
   font-weight: var(--fw-semiBold);
`
export const SubMealItem = styled.li`
   display: grid;
   grid-auto-flow: column;
   align-items: center;
   justify-content: space-between;
   gap: 5px;
   font-size: var(--fs-sm);
   font-weight: var(--fw-semiBold);
`

export const MealPlanDishes = styled(Flex)`
   justify-content: stretch;
   overflow: auto;
`
export const MealPlanDish = styled.div`
   width: 150px;
   height: 100%;
   position: relative;
   cursor: pointer;
   &:not(:last-child) {
      margin-right: 4px;
   }
`
export const MealPlanDeleteButton = styled.button`
   position: absolute;
   top: 0;
   right: 0;
   width: 30px;
   height: 30px;
   background-color: transparent;
   padding: 0;
   box-shadow: none;
`