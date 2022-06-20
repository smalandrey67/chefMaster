import { FC } from 'react'

import { FavoritesEl } from './Favorites.styled'
import { Container, RecipesWrapper } from '../../assets/styled/Reused.styled'

import { useAppSelector } from '../../hooks/useRedux'

import { FavoritesType } from '../../@types/Favorites'
import { motion } from '../../utils/constants/motion.constants'

import { FavoriteCard } from '../../components/Cards/FavoriteCard/FavoriteCard'

export const Favorites: FC = () => {
   const { favorites } = useAppSelector(state => state.favorites)

   return (
      <FavoritesEl {...motion}>
         <Container>
            <RecipesWrapper>
               {favorites.map((item: FavoritesType): JSX.Element => <FavoriteCard key={item.id} {...item} />)}
            </RecipesWrapper>
         </Container>
      </FavoritesEl>
   )
}