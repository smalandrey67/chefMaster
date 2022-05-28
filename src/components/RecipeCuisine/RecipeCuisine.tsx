import { FC } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { CuisineResultsType } from '../../types/Cuisine'

import { SubTitle } from '../../styled/Reused.styled'
import { RecipeEl } from '../Recipe/Recipe.styled'
import { RecipeCuisineImageWrapper, RecipeCuisineImage } from './RecipeCuisine.styled'


export const RecipeCuisine: FC<CuisineResultsType> = ({ id, title, image }) => {
    const navigate: NavigateFunction = useNavigate()
  
    const detailsNavigateHandler = () => navigate(`/details/${id}`)

    return (
        <RecipeEl onClick={detailsNavigateHandler}>
            <RecipeCuisineImageWrapper>
                <RecipeCuisineImage src={image} alt={title} />  
            </RecipeCuisineImageWrapper>

            <SubTitle>{title}</SubTitle>
        </RecipeEl>
    )
}