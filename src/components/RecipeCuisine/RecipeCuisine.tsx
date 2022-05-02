import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ICuisine } from '../../models/ICuisine'

import { RecipeEl } from '../../styled/Basic/Recipe.styled'
import { RecipeCuisineImageWrapper, RecipeCuisineImage, RecipeCuisineTitle } from '../../styled/Basic/RecipeCuisine.styled'

type RecipeCuisineProps = {
    recipe: ICuisine;
}

export const RecipeCuisine: FC<RecipeCuisineProps> = ({ recipe }) => {
    const navigate = useNavigate()
    const { id, title, image } = recipe

    const detailsNavigateHandler = () => navigate(`/details/${id}`)

    return (
        <RecipeEl onClick={detailsNavigateHandler}>
            <RecipeCuisineImageWrapper>
                <RecipeCuisineImage src={image}/>  
            </RecipeCuisineImageWrapper>

            <RecipeCuisineTitle>{title}</RecipeCuisineTitle>
        </RecipeEl>
    )
}