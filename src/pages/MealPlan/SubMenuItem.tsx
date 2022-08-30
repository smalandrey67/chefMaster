import { FC, memo } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppSelector } from 'hooks/useRedux'
import { selectActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'

import { MealPlanSubMenuItem, MealPlanSubMenuLink } from './MealPlan.styled'
import { SubMenuProps } from './MealPlan.types'

export const SubMenuItem: FC<SubMenuProps> = memo(({ subMealId, path, title, Icon }) => {
   const activeDay = useAppSelector(selectActiveMealDay)
   const location = useLocation()

   return (
      <MealPlanSubMenuItem>
         <MealPlanSubMenuLink to={path} state={{ prevPath: location.pathname, idWeek: activeDay.idWeek, subMealId }}>
            <Icon />
            {title}
         </MealPlanSubMenuLink>
      </MealPlanSubMenuItem>
   )
})