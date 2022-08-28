import { FC, memo } from 'react'
import { useLocation } from 'react-router-dom'

import { MealPlanSubMenuItem, MealPlanSubMenuLink } from './MealPlan.styled'
import { SubMenuProps } from './MealPlan.types'

export const SubMenuItem: FC<SubMenuProps> = memo(({ subMealId, idWeek, path, title, Icon }) => {
   const location = useLocation()

   return (
      <MealPlanSubMenuItem>
         <MealPlanSubMenuLink to={path} state={{ prevPath: location.pathname, idWeek, subMealId }}>
            <Icon />
            {title}
         </MealPlanSubMenuLink>
      </MealPlanSubMenuItem>
   )
})