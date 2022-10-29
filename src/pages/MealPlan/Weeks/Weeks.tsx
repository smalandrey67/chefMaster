import { FC, memo } from 'react'

import { useAppSelector } from 'hooks/useRedux'
import { selectActiveMealDay, selectWeekPlan } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'

import { SplideSlide } from '@splidejs/react-splide'
import { splideOptions } from 'constants/splide'
import { Splide } from '@splidejs/react-splide'

import { Group } from 'assets/styled/Reused.styled'
import * as Style from './Weeks.styled'
import { WeeksProps } from './Weeks.types'
import { getIndexOfCurrentDay } from 'utils/getIndexOfCurrentDay'

export const Weeks: FC<WeeksProps> = memo(({ setActiveMealDayHandler }) => {
  const weekPlan = useAppSelector(selectWeekPlan)
  const activeDay = useAppSelector(selectActiveMealDay)

  return (
    <Splide options={splideOptions(3, getIndexOfCurrentDay())}>
      {weekPlan.map((dayPlan) => (
        <SplideSlide key={dayPlan.idWeek} style={{ padding: '4px' }}>
          <Group height='35px' width='100%'>
            <Style.WeekButton
              idWeek={dayPlan.idWeek}
              activeDayIdWeek={activeDay.idWeek}
              onClick={() => setActiveMealDayHandler(dayPlan.idWeek)}
            >
              {dayPlan.weekDay.slice(0, 3)}
            </Style.WeekButton>
          </Group>
        </SplideSlide>
      ))}
    </Splide>
  )
})
