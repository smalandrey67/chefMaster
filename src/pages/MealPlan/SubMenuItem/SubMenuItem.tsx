import { FC, memo } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppSelector } from 'hooks/useRedux'
import { selectActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'

import * as Style from './SubMenuItem.styled'
import { SubMenuItemProps } from './SubMenuItem.types'

export const SubMenuItem: FC<SubMenuItemProps> = memo(({ subMealId, path, title, Icon }) => {
  const activeDay = useAppSelector(selectActiveMealDay)
  const location = useLocation()

  return (
    <Style.SubMenuItemEl>
      <Style.SubMenuLink to={path} state={{ prevPath: location.pathname, idWeek: activeDay.idWeek, subMealId }}>
        <Icon />
        {title}
      </Style.SubMenuLink>
    </Style.SubMenuItemEl>
  )
})
