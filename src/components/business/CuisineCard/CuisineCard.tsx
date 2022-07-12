import { FC } from 'react'

import { SubTitle, RecipeEl } from '../../../assets/styled/Reused.styled'
import { RecipeCuisineImageWrapper, RecipeCuisineImage } from './CuisineCard.styled'

import { CuisineResultsType } from '../../../@types/Cuisine'
import { useRedirect } from '../../../hooks/useRedirect'

export const CuisineCard: FC<CuisineResultsType> = ({ id, title, image }) => {
    const { navigateHandler } = useRedirect()

    return (
        <RecipeEl onClick={() => navigateHandler('/details/', id)}>
            <RecipeCuisineImageWrapper>
                <RecipeCuisineImage src={image} alt={title} />  
            </RecipeCuisineImageWrapper>

            <SubTitle>{title}</SubTitle>
        </RecipeEl>
    )
}