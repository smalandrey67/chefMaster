import { FC } from 'react'
import { IRecipe } from '../../models/IRecipe'
import { SplideSlide } from '@splidejs/react-splide'

import { RecipeEl, RecipeBody, RecipeWrapper, RecipeImage, RecipeTitle, RecipeGradient, RecipeScore } from '../../styled/Basic/Recipe.styled'

interface RecipeProps {
    recipe: IRecipe
}

export const Recipe: FC<RecipeProps> = ({ recipe }) => {
    const { id, title, image, healthScore } = recipe
    
    return (
        <SplideSlide>
            <RecipeEl>
                <RecipeBody>
                    <RecipeWrapper>
                        <RecipeImage src={image} />
                    </RecipeWrapper>

                    <RecipeTitle>{title}</RecipeTitle>
                    <RecipeScore healthScore={healthScore} >{healthScore}</RecipeScore>
                    <RecipeGradient />

                </RecipeBody>
            </RecipeEl>
        </SplideSlide>
    )
}