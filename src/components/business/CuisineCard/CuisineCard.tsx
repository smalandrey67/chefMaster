import { FC } from 'react'

import { LazyImage } from 'components/common/LazyImage/LazyImage'
import { RecipeContainer } from 'components/containers/RecipeContainer/RecipeContainer'

import { RecipeResultType } from 'types/Recipe'

export const CuisineCard: FC<RecipeResultType> = ({ id, title, image }) => {
  return (
    <RecipeContainer id={id} title={title} image={image}>
      <LazyImage image={image} alt={title} width='100%' height='100%' />
    </RecipeContainer>
  )
}
