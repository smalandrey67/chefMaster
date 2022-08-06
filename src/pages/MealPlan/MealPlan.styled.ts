import styled from 'styled-components'

export const MealPlanEl = styled.section``

export const MealPlanList = styled.ul`
   padding: 0;
   margin: 0;
`

export const MealPlanItem = styled.li`
   padding: 15px 0;
   &:not(:last-child) {
      border-bottom: 1px solid var(--color-black);
   } 
` 

export const MealPlanItemTitle = styled.h4`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 0 10px 0;
`

export const MealPlanItemAdd = styled.button`
   font-size: var(--fs-md);
   font-weight: var(--fw-bold);
`

export const MealPlanDishes = styled.div`
   display: flex;
   align-items: center;
   margin: 0 -3px;
`

export const MealPlanDish = styled.div`
   flex: 0 1 33.333%;
   padding: 0 3px;

   border-radius: var(--br-radius);
`

export const MealPlanDishImage = styled.img`
   width: 100%;
   object-fit: cover;
   overflow: hidden;
`


