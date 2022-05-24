import { FC } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { CuisineResultsType } from '../../types/Cuisine'

import { RecipeEl } from '../Recipe/Recipe.styled'
import { RecipeCuisineImageWrapper, RecipeCuisineImage, RecipeCuisineTitle } from './RecipeCuisine.styled'

type RecipeCuisineProps = {
    recipe: CuisineResultsType
}

export const RecipeCuisine: FC<RecipeCuisineProps> = ({ recipe }) => {
    const navigate: NavigateFunction = useNavigate()
    const { id, title, image } = recipe

    const detailsNavigateHandler = () => navigate(`/details/${id}`)

    return (
        <RecipeEl onClick={detailsNavigateHandler}>
            <RecipeCuisineImageWrapper>
                <RecipeCuisineImage src={image} alt={title} />  
            </RecipeCuisineImageWrapper>

            <RecipeCuisineTitle>{title}</RecipeCuisineTitle>
        </RecipeEl>
    )
}