import { useState } from 'react'

import { UseOpenMenuAddingRecipeReturnsType } from 'types/Hooks'

export const useOpenMenuAddingRecipe = (): UseOpenMenuAddingRecipeReturnsType => {
   const [menuAddingRecipeIndex, setMenuAddingRecipeIndex] = useState<number | null>(null)

   const openMenuAddingRecipeHandler = (index: number): void => {
      if (index === menuAddingRecipeIndex) {
         setMenuAddingRecipeIndex(null)

         return
      }
      setMenuAddingRecipeIndex(index)
   }

   return {
      menuAddingRecipeIndex,
      openMenuAddingRecipeHandler
   }
}