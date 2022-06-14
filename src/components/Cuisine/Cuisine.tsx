import { FC } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { CuisineResultsType } from '../../@types/Cuisine'

import { SubTitle } from '../../assets/styled/Reused.styled'
import { RecipeEl } from '../Recipe/Recipe.styled'
import { RecipeCuisineImageWrapper, RecipeCuisineImage } from './Cuisine.styled'

export const RecipeCuisine: FC<CuisineResultsType> = ({ id, title, image }) => {
    const navigate: NavigateFunction = useNavigate()
  
    const detailsNavigateHandler = (): void => {
        navigate(`/details/${id}`)
    }

    return (
        <RecipeEl onClick={detailsNavigateHandler}>
            <RecipeCuisineImageWrapper>
                <RecipeCuisineImage src={image} alt={title} />  
            </RecipeCuisineImageWrapper>

            <SubTitle>{title}</SubTitle>
        </RecipeEl>
    )
}