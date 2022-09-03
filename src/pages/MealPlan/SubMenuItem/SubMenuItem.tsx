import { FC, memo } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppSelector } from 'hooks/useRedux'
import { selectActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'

import { SubMenuItemEl, SubMenuLink } from './SubMenuItem.styled'
import { SubMenuItemProps } from './SubMenuItem.types'

export const SubMenuItem: FC<SubMenuItemProps> = memo(({ subMealId, path, title, Icon }) => {
   const activeDay = useAppSelector(selectActiveMealDay)
   const location = useLocation()

   return (
      <SubMenuItemEl>
         <SubMenuLink to={path} state={{ prevPath: location.pathname, idWeek: activeDay.idWeek, subMealId }}>
            <Icon />
            {title}
         </SubMenuLink>
      </SubMenuItemEl>
   )
})