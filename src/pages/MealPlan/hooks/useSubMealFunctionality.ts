import { useState, useRef, useEffect } from 'react'

import { useAppDispatch } from 'hooks/useRedux'
import { addSubMealMenu, deleteSubMealMenu } from 'store/slices/mealPlanSlice/mealPlanSlice'

import { UseSubMealFunctionalityType } from '../MealPlan.types'
import { handleAlert } from 'utils/helpers/handleAlert.helpers'

export const useSubMealFunctionality: UseSubMealFunctionalityType = (idWeek, setActiveMealDay) => {
   const dispatch = useAppDispatch()

   const [isSubMealMenu, setIsSubMealMenu] = useState<boolean>(false)
   const inputSubMealAddRef = useRef<HTMLInputElement>(null)

   useEffect(() => {
      if (isSubMealMenu && inputSubMealAddRef.current) {
         inputSubMealAddRef.current.focus()
      }
   }, [isSubMealMenu])

   const openSubMealFieldHandler = (): void => {
      setIsSubMealMenu(prev => !prev)
   }

   const addSubMealMenuHandler = (): void => {
      if (inputSubMealAddRef.current && inputSubMealAddRef.current.value) {
         const subMealMenuTitle = inputSubMealAddRef.current.value.trim().toLocaleLowerCase()

         dispatch(addSubMealMenu({ subMealMenuTitle, idWeek }))
         setActiveMealDay(idWeek)

         inputSubMealAddRef.current.value = ''
         setIsSubMealMenu(false)
      }
   }

   const deleteSubMealMenuHandler = (subMealId: string): void => {
      dispatch(deleteSubMealMenu({ subMealId, idWeek }))
      setActiveMealDay(idWeek)

      handleAlert()('SubMeal was deleted', 'success')
   }

   return {
      isSubMealMenu,
      inputSubMealAddRef,
      openSubMealFieldHandler,
      deleteSubMealMenuHandler,
      addSubMealMenuHandler
   }
}