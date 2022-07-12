import { FC } from 'react'

import { RecipeResultType } from '../../../@types/Recipe'
import { SplideSlide } from '@splidejs/react-splide'
import { useRedirect } from '../../../hooks/useRedirect'

import { RecipeEl } from '../../../assets/styled/Reused.styled'
import { RecipeBody, RecipeWrapper, RecipeImage, RecipeTitle, RecipeGradient, RecipeScore } from './RecipeCard.styled'

export const RecipeCard: FC<RecipeResultType> = ({ id, title, image, healthScore }) => {
    const { navigateHandler } = useRedirect()

    return (
        <SplideSlide>
            <RecipeEl onClick={() => navigateHandler('/details/', id)}>
                <RecipeBody>
                    <RecipeWrapper>
                        <RecipeImage src={image} alt={title} />
                    </RecipeWrapper>

                    <RecipeTitle>{title}</RecipeTitle>
                    <RecipeScore healthScore={healthScore}>{healthScore}</RecipeScore>
                    <RecipeGradient />
                </RecipeBody>
            </RecipeEl>
        </SplideSlide>
    )
}