import { FC, memo } from 'react'
import { useLocation } from 'react-router-dom'
import { IconType } from 'react-icons'

import {  MealPlanSubMenuItem, MealPlanSubMenuLink } from './MealPlan.styled'

type SubMenuProps = {
   idWeek: string;
   path: string;
   title: string;
   Icon: IconType;
}

export const SubMenuItem: FC<SubMenuProps> = memo(({ idWeek, path, title, Icon }) => {
   const location = useLocation()

   return (
      <MealPlanSubMenuItem>
         <MealPlanSubMenuLink to={path} state={{ prevPath: location.pathname, idWeek }}>
            <Icon />
            {title}
         </MealPlanSubMenuLink>
      </MealPlanSubMenuItem>
   )
})