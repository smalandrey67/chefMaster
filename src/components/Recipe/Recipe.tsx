import { FC } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { IRecipe } from '../../models/IRecipe'
import { SplideSlide } from '@splidejs/react-splide'

import { RecipeEl, RecipeBody, RecipeWrapper, RecipeImage, RecipeTitle, RecipeGradient, RecipeScore } from './Recipe.styled'

type RecipeProps = {
    recipe: IRecipe
}

export const Recipe: FC<RecipeProps> = ({ recipe }) => {
    const navigate: NavigateFunction = useNavigate()
    const { id, title, image, healthScore } = recipe
    
    const detailsNavigateHandler = () => navigate(`/details/${id}`)

    return (
        <SplideSlide>
            <RecipeEl onClick={detailsNavigateHandler}>
                <RecipeBody>
                    <RecipeWrapper>
                        <RecipeImage src={image} />
                    </RecipeWrapper>

                    <RecipeTitle>{title}</RecipeTitle>
                    <RecipeScore healthScore={healthScore}>{healthScore}</RecipeScore>
                    <RecipeGradient />

                </RecipeBody>
            </RecipeEl>
        </SplideSlide>
    )
}