import { FC } from 'react'

import { useAppSelector } from 'hooks/useRedux'
import { selectWeekPlan } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'

import { SplideSlide } from '@splidejs/react-splide'
import { splideOptions } from 'utils/constants/splide.constants'
import { Splide } from '@splidejs/react-splide'

import { Group } from 'assets/styled/Reused.styled'
import { MealPlanWeekButton } from './MealPlan.styled'
import { MealPlanWeeksProps } from './MealPlan.types'

export const MealPlanWeeks: FC<MealPlanWeeksProps> = ({ activeDayIdWeek, setActiveMealDayHandler }) => {
   const weekPlan = useAppSelector(selectWeekPlan)

   return (
      <Splide options={splideOptions(3)} style={{ marginBottom: '10px' }}>
         {weekPlan.map(dayPlan =>
            <SplideSlide key={dayPlan.idWeek} style={{ padding: '7px' }}>
               <Group height='30px' width='100%'>
                  <MealPlanWeekButton
                     idWeek={dayPlan.idWeek}
                     activeDayIdWeek={activeDayIdWeek}
                     onClick={() => setActiveMealDayHandler(dayPlan.idWeek)}
                  >{dayPlan.weekDay.slice(0, 3)}
                  </MealPlanWeekButton>
               </Group>
            </SplideSlide>
         )}
      </Splide>
   )
}