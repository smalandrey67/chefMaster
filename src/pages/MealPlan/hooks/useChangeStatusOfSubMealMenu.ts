import { useState, useCallback } from 'react'

import { UseChangeStatusOfSubMealMenuReturnsType } from 'types/Hooks'

export const useChangeStatusOfSubMealMenu = (): UseChangeStatusOfSubMealMenuReturnsType => {
   const [isSubMealMenu, setIsSubMealMenu] = useState<boolean>(false)

   const openSubMealFieldHandler = (): void => {
      setIsSubMealMenu(prev => !prev)
   }

   const resetStatusOfSubMealField = useCallback((): void => {
      setIsSubMealMenu(false)
   }, [])

   return {
      openSubMealFieldHandler,
      resetStatusOfSubMealField,
      isSubMealMenu
   }
}