import { FC } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { RecipeResultType } from '../../models/Recipe'
import { SplideSlide } from '@splidejs/react-splide'

import { RecipeEl, RecipeBody, RecipeWrapper, RecipeImage, RecipeTitle, RecipeGradient, RecipeScore } from './Recipe.styled'


export const Recipe: FC<RecipeResultType> = ({ id, title, image, healthScore }) => {
    const navigate: NavigateFunction = useNavigate()
    
    const detailsNavigateHandler = (): void => navigate(`/details/${id}`)

    return (
        <SplideSlide>
            <RecipeEl onClick={detailsNavigateHandler}>
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