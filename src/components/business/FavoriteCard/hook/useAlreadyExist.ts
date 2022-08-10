import { useAppSelector } from 'hooks/useRedux'
import { selectWeekPlan } from 'store/selectors'

import { StateValuesType } from '../FavoriteCard.types'

export const useAlreadyExist = (state: StateValuesType, id: number): boolean | undefined => {
   const weekPlan = useAppSelector(selectWeekPlan)

   const isAlreadyExistHandler = (): boolean | undefined => {
      const currentWeek = weekPlan.find(week => week.idWeek === state.idWeek)

      if (currentWeek) {
         return currentWeek.dishes.some(dish => dish.idDish === String(id))
      }
   }
   const isExist = isAlreadyExistHandler()

   return isExist
}