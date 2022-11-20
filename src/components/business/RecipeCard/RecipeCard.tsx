import { FC } from 'react'

import { RandomRecipeResultType } from 'types/Recipe'
import { SplideSlide } from '@splidejs/react-splide'
import { useRedirect } from 'hooks/useRedirect'

import * as ReusedStyle from 'assets/styled/Reused.styled'
import * as Style from './RecipeCard.styled'

import { LazyImage } from 'components/common/LazyImage/LazyImage'

export const RecipeCard: FC<RandomRecipeResultType> = ({ id, title, image, healthScore }) => {
  const navigateHandler = useRedirect()

  return (
    <SplideSlide>
      <ReusedStyle.Article onClick={() => navigateHandler('/details/', id)}>
        <ReusedStyle.RecipeImageWrapper>
          <LazyImage image={image} alt={title} width='100%' height='100%' />
          <Style.RecipeScore healthScore={healthScore}>{healthScore}</Style.RecipeScore>
          <Style.RecipeGradient />
        </ReusedStyle.RecipeImageWrapper>
      </ReusedStyle.Article>
    </SplideSlide>
  )
}
