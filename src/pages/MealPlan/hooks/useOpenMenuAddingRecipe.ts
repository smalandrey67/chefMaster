import { useState, useCallback } from 'react'

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

  const resetStatusOfMenuAddingRecipe = useCallback(() => {
    setMenuAddingRecipeIndex(null)
  }, [])

  return {
    menuAddingRecipeIndex,
    openMenuAddingRecipeHandler,
    resetStatusOfMenuAddingRecipe
  }
}
