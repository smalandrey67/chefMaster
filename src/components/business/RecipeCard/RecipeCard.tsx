import { FC } from 'react'

import { RandomRecipeResultType } from 'types/Recipe'
import { SplideSlide } from '@splidejs/react-splide'
import { useRedirect } from 'hooks/useRedirect'

import { Article, RecipeImageWrapper } from 'assets/styled/Reused.styled'
import { RecipeScore, RecipeGradient } from './RecipeCard.styled'

import { LazyImage } from 'components/reusable/LazyImage/LazyImage'

export const RecipeCard: FC<RandomRecipeResultType> = ({ id, title, image, healthScore }) => {
    const navigateHandler = useRedirect()

    return (
        <SplideSlide>
            <Article onClick={() => navigateHandler('/details/', String(id))}>
                <RecipeImageWrapper>
                    <LazyImage image={image} alt={title} width='100%' height='100%' />
                    <RecipeScore healthScore={healthScore}>{healthScore}</RecipeScore>
                    <RecipeGradient />
                </RecipeImageWrapper>
            </Article>
        </SplideSlide>
    )
}