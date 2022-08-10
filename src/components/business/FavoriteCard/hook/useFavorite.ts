import { useLocation } from 'react-router-dom'
import { useRedirect } from 'hooks/useRedirect'
import { useAppDispatch } from 'hooks/useRedux'

import { addRecipeIntoMeal } from 'store/slices/mealPlanSlice'
import { removeFavorite } from 'store/slices/favoritesSlice'

import { LocationStateType } from '../FavoriteCard.types'
import { useFavoriteType } from 'types/Hooks'

export const useFavorite = (id: number, title: string, image: string): useFavoriteType => {
   const dispatch = useAppDispatch()
   const navigateHandler = useRedirect()

   const location = useLocation()
   const { state } = location as LocationStateType

   const expectedPath = '/meal/plan'

   const removeFavoriteHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      e.stopPropagation()
      dispatch(removeFavorite(id))
   }

   const addRecipeIntoWeekPlan = () => {
      if (state.idWeek) {
         dispatch(addRecipeIntoMeal(state.idWeek, id, title, image))
         navigateHandler(expectedPath)
      }
   }

   return {
      removeFavoriteHandler,
      addRecipeIntoWeekPlan,
      expectedPath,
      state
   }
}