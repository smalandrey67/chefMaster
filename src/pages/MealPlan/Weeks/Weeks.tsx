import { FC, memo } from 'react'

import { useAppSelector } from 'hooks/useRedux'
import { selectActiveMealDay, selectWeekPlan } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'

import { SplideSlide } from '@splidejs/react-splide'
import { splideOptions } from 'utils/constants/splide.constants'
import { Splide } from '@splidejs/react-splide'

import { Group } from 'assets/styled/Reused.styled'
import { WeekButton } from './Weeks.styled'
import { WeeksProps } from './Weeks.types'

export const Weeks: FC<WeeksProps> = memo(({ setActiveMealDayHandler }) => {
   const weekPlan = useAppSelector(selectWeekPlan)
   const activeDay = useAppSelector(selectActiveMealDay)

   return (
      <Splide options={splideOptions(3)} style={{ marginBottom: '10px' }}>
         {weekPlan.map(dayPlan =>
            <SplideSlide key={dayPlan.idWeek} style={{ padding: '4px' }}>
               <Group height='35px' width='100%'>
                  <WeekButton
                     idWeek={dayPlan.idWeek}
                     activeDayIdWeek={activeDay.idWeek}
                     onClick={() => setActiveMealDayHandler(dayPlan.idWeek)}
                  >{dayPlan.weekDay.slice(0, 3)}
                  </WeekButton>
               </Group>
            </SplideSlide>
         )}
      </Splide>
   )
})