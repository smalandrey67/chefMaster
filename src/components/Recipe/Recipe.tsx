import { FC } from 'react'
import { IRecipe } from '../../models/IRecipe'
import { SplideSlide } from '@splidejs/react-splide'

import { RecipeEl, RecipeBody, RecipeWrapper, RecipeImage, RecipeTitle, RecipeGradient } from '../../styled/Basic/Recipe.styled'

interface RecipeProps {
    recipe: IRecipe
}

export const Recipe: FC<RecipeProps> = ({ recipe }) => {
    const { id, title, image } = recipe

    return (
        <SplideSlide>
            <RecipeEl>
                <RecipeBody>
                    <RecipeWrapper> 
                        <RecipeImage src={image} />
                    </RecipeWrapper>
                    <RecipeTitle>{title}</RecipeTitle>
                    <RecipeGradient />   
                </RecipeBody> 
            </RecipeEl>
        </SplideSlide>
    )
}