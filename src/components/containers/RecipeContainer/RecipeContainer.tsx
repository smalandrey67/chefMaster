import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { useRedirect } from 'hooks/useRedirect'
import { useAlreadyExist } from 'hooks/useAlreadyExist'
import { useAddIntoWeekPlan } from 'hooks/useAddIntoWeekPlan'

import { LocationStateType } from 'types/Location'
import { RecipeContainerProps } from './RecipeContainer.types'

import { Article, RecipeImageWrapper, RecipeTitle } from 'assets/styled/Reused.styled'

export const RecipeContainer: FC<RecipeContainerProps> = ({ children, id, title, image }) => {
   const location = useLocation()
   const { state } = location as LocationStateType

   const navigateHandler = useRedirect()
   const addRecipeIntoWeekPlan = useAddIntoWeekPlan(state, id, title, image)

   const isExist = useAlreadyExist(state, id)
   const isCanAdd = state && state.prevPath === '/meal/plan' && !isExist

   return (
      <Article onClick={() => isCanAdd ? addRecipeIntoWeekPlan() : !isExist ? navigateHandler('/details/', String(id)) : null}>
         <RecipeImageWrapper isExist={isExist}>
            {children}
            <RecipeTitle>{title}</RecipeTitle>
         </RecipeImageWrapper>
      </Article>
   )
}