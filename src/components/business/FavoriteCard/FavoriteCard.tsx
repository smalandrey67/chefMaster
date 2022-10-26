import { FC } from 'react'
import { BsSuitHeartFill } from 'react-icons/bs'

import { useRemoveFromFavorite } from './hook/useRemoveFromFavorite'
import { FavoriteRecipeType } from 'types/Favorites'
import { ButtonHeart } from 'assets/styled/Reused.styled'

import { LazyImage } from 'components/common/LazyImage/LazyImage'
import { RecipeContainer } from 'components/containers/RecipeContainer/RecipeContainer'

export const FavoriteCard: FC<FavoriteRecipeType> = ({ id, title, image, isActive }) => {
  const removeFavoriteRecipeHandler = useRemoveFromFavorite(id)
  const colorValue = isActive ? 'red' : 'black'

  return (
    <RecipeContainer id={id} title={title} image={image}>
      <LazyImage image={image} alt={title} width='100%' height='100%' />
      <ButtonHeart aria-label='remove this recipe from favorite' onClick={removeFavoriteRecipeHandler}>
        <BsSuitHeartFill color={colorValue} size='25' />
      </ButtonHeart>
    </RecipeContainer>
  )
}
