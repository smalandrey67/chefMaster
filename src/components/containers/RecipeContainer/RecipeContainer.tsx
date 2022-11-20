import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { useRedirect } from 'hooks/useRedirect'
import { useAlreadyExist } from 'hooks/useAlreadyExist'
import { useAddIntoWeekPlan } from 'hooks/useAddIntoWeekPlan'

import { LocationStateType } from 'types/Location'
import { RecipeContainerProps } from './RecipeContainer.types'

import * as ReusedStyle from 'assets/styled/Reused.styled'

export const RecipeContainer: FC<RecipeContainerProps> = ({ children, id, title, image }) => {
  const { state } = useLocation() as LocationStateType

  const navigateHandler = useRedirect()
  const addRecipeIntoWeekPlan = useAddIntoWeekPlan(state, id, title, image)

  const isExist = useAlreadyExist(state, id)
  const isCanAdd = state && state.prevPath === '/meal/plan' && !isExist

  return (
    <ReusedStyle.Article
      onClick={() => (isCanAdd ? addRecipeIntoWeekPlan() : !isExist ? navigateHandler('/details/', String(id)) : null)}
    >
      <ReusedStyle.RecipeImageWrapper isExist={isExist}>
        {children}
        <ReusedStyle.RecipeTitle>{title}</ReusedStyle.RecipeTitle>
      </ReusedStyle.RecipeImageWrapper>
    </ReusedStyle.Article>
  )
}
