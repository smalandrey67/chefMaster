import { FC } from 'react'

import { RecipeResultType } from 'types/Recipe'
import { SplideSlide } from '@splidejs/react-splide'
import { useRedirect } from 'hooks/useRedirect'

import { RecipeEl } from 'assets/styled/Reused.styled'
import { RecipeBody, RecipeWrapper, RecipeTitle, RecipeGradient, RecipeScore } from './RecipeCard.styled'

import { LazyImage } from '../../reusable/LazyImage/LazyImage'

export const RecipeCard: FC<RecipeResultType> = ({ id, title, image, healthScore }) => {
    const { navigateHandler } = useRedirect()

    return (
        <SplideSlide>
            <RecipeEl onClick={() => navigateHandler('/details/', id)}>
                <RecipeBody>
                    <RecipeWrapper>
                        <LazyImage 
                            image={image} 
                            alt={title}
                            width='100%'
                            height='100%'
                        />
                    </RecipeWrapper>

                    <RecipeTitle>{title}</RecipeTitle>
                    <RecipeScore healthScore={healthScore}>{healthScore}</RecipeScore>
                    <RecipeGradient />
                </RecipeBody>
            </RecipeEl>
        </SplideSlide>
    )
}