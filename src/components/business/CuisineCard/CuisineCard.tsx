import { FC } from 'react'

import { SubTitle, RecipeEl } from 'assets/styled/Reused.styled'
import { RecipeCuisineImageWrapper } from './CuisineCard.styled'

import { CuisineResultsType } from 'types/Cuisine'
import { useRedirect } from 'hooks/useRedirect'
import { LazyImage } from '../../reusable/LazyImage/LazyImage'

export const CuisineCard: FC<CuisineResultsType> = ({ id, title, image }) => {
    const navigateHandler = useRedirect()

    return (
        <RecipeEl onClick={() => navigateHandler('/details/', String(id))}>
            <RecipeCuisineImageWrapper>
                <LazyImage
                    image={image}
                    alt={title}
                    width='100%'
                    height='100%'
                />
            </RecipeCuisineImageWrapper>

            <SubTitle>{title}</SubTitle>
        </RecipeEl>
    )
}