import { FC, memo } from 'react'

import { useAppSelector } from 'hooks/useRedux'
import { selectActiveMealDay, selectWeekPlan } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'

import { SplideSlide } from '@splidejs/react-splide'
import { splideOptions } from 'utils/constants/splide.constants'
import { Splide } from '@splidejs/react-splide'

import { Group } from 'assets/styled/Reused.styled'
import { MealPlanWeekButton } from './MealPlan.styled'
import { MealPlanWeeksProps } from './MealPlan.types'

export const MealPlanWeeks: FC<MealPlanWeeksProps> = memo(({ setActiveMealDayHandler }) => {
   const weekPlan = useAppSelector(selectWeekPlan)
   const activeDay = useAppSelector(selectActiveMealDay)
   
   return (
      <Splide options={splideOptions(3)} style={{ marginBottom: '10px' }}>
         {weekPlan.map(dayPlan =>
            <SplideSlide key={dayPlan.idWeek} style={{ padding: '4px' }}>
               <Group height='35px' width='100%'>
                  <MealPlanWeekButton
                     idWeek={dayPlan.idWeek}
                     activeDayIdWeek={activeDay.idWeek}
                     onClick={() => setActiveMealDayHandler(dayPlan.idWeek)}
                  >{dayPlan.weekDay.slice(0, 3)}
                  </MealPlanWeekButton>
               </Group>
            </SplideSlide>
         )}
      </Splide>
   )
})