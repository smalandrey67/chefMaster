import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { Button } from 'assets/styled/Reused.styled'

export const MealPlanEl = styled.section``

export const MealPlanList = styled.ul`
   padding: 0;
   margin: 0;
`

export const MealPlanItem = styled.li`
   padding: 15px 0 5px 0;
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

export const MealPlanSubMenu = styled(motion.ul)`
   margin: 0;
   padding: 0;
   display: none;
   position: absolute;
   top: 45px;
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

export const MealPlanSubMenuItem = styled.li`
   &:not(:last-child){
      margin-bottom: 15px;
   }
`

export const MealPlanSubMenuLink = styled(Link)`
   display: grid;
   grid-auto-flow: column;
   align-items: center;
   gap: 5px;
   font-size: var(--fs-sm);
   font-weight: var(--fw-semiBold);
`

export const MealPlanDishes = styled.div`
   height: 105px;
   display: flex;
   align-items: center;
   overflow: scroll;
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

export const MealPlanCloseButton = styled.button`
   position: absolute;
   top: 5px;
   width: 22px;
   height: 22px;
   right: 3px;
   background-color: var(--color-scrollbar);
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: 0.7;
   padding: 0;
   margin: 0;
   display: block;
`
