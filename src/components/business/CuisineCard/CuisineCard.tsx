import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { SubTitle, RecipeEl } from 'assets/styled/Reused.styled'
import { RecipeCuisineImageWrapper } from './CuisineCard.styled'

import { useRedirect } from 'hooks/useRedirect'
import { useAlreadyExist } from 'hooks/useAlreadyExist'

import { CuisineResultsType } from 'types/Cuisine'
import { LazyImage } from '../../reusable/LazyImage/LazyImage'
import { LocationStateType } from 'types/Location'
import { useAddIntoWeekPlan } from 'hooks/useAddIntoWeekPlan'

export const CuisineCard: FC<CuisineResultsType> = ({ id, title, image }) => {
    const location = useLocation()
    const { state } = location as LocationStateType

    const isExist = useAlreadyExist(state, id)
    const addRecipeIntoWeekPlan = useAddIntoWeekPlan(state, id, title, image)
    
    const navigateHandler = useRedirect()
    const isCanAdd: boolean = state && state.prevPath === '/meal/plan' && !isExist

    return (
        <RecipeEl onClick={() => isCanAdd ? addRecipeIntoWeekPlan() : navigateHandler('/details/', String(id))}>
            <RecipeCuisineImageWrapper isExist={isExist}>
                <LazyImage
                    image={image}
                    alt={title}
                    width='100%'
                    height='100%'
                />
            </RecipeCuisineImageWrapper>
            <SubTitle>{title}</SubTitle>
        </RecipeEl>
    )
}