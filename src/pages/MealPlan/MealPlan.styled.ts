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
export const MealPlanItemTitle = styled.h4`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 0 10px 0;
   font-size: var(--fs-md);
   position: relative;
`
export const MealPlanSubMealTitle = styled(MealPlanItemTitle)`
   font-weight: var(--fw-semiBold);
   font-size: var(--fw-sm);
   text-transform: capitalize;
`

export const MealPlanItemAdd = styled(Button)`
   width: 25px;
   height: 25px;
   padding: 0;
   border-radius: 50%;
   background-color: var(--color-categories);
   color: var(--color-white);
   display: block;
   box-shadow: none;
`
export const MealPlanSubMealAdd = styled.button`
   width: 25px;
   height: 25px;
   padding: 0;
   border: none;
   background-color: transparent;

   @media (hover: hover) {
        transition: all 0.3s ease;
        &:hover {
            border-radius: 50%;
            background-color: var(--color-scrollbar);
            color: var(--color-white);
        }
    }

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

   @media (min-width: 768px) {
      top: 33px;
   }
`

export const MealPlanSubMenuItem = styled.li`
   &:not(:last-child){
      margin-bottom: 10px;
   }
`
export const MealPLanSubMenuItemDelete = styled.li`
   display: flex;
   justify-content: flex-start;
   font-size: var(--fs-sm);
   font-weight: var(--fw-semiBold);
   color: var(--color-error);
   cursor: pointer;
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
