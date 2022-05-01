import { FC } from 'react'

import { ICuisine } from '../../models/ICuisine'

import { RecipeEl } from '../../styled/Basic/Recipe.styled'
import { RecipeCuisineImageWrapper, RecipeCuisineImage, RecipeCuisineTitle } from '../../styled/Basic/RecipeCuisine.styled'

interface RecipeCuisineProps {
    recipe: ICuisine;
}

export const RecipeCuisine: FC<RecipeCuisineProps> = ({ recipe }) => {
    const { id, title, image } = recipe

    return (
        <RecipeEl>
            <RecipeCuisineImageWrapper>
                <RecipeCuisineImage src={image}/>  
            </RecipeCuisineImageWrapper>

            <RecipeCuisineTitle>{title}</RecipeCuisineTitle>
        </RecipeEl>
    )
}