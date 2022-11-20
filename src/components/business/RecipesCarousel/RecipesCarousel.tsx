import { FC } from 'react'

import * as ReusedStyle from 'assets/styled/Reused.styled'
import SpinnerBg from 'assets/images/icons/spinner-bg.svg'
import { BiError } from 'react-icons/bi'

import { splideOptions } from 'constants/splide'
import { useGetRandomRecipesQuery } from 'services/RecipesService'
import { Splide } from '@splidejs/react-splide'

import { RecipeCard } from 'components/business/RecipeCard/RecipeCard'
import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'

export const RecipesCarousel: FC = () => {
  const { data: recipes, error, isLoading } = useGetRandomRecipesQuery()

  return (
    <SectionContainer>
      <Splide options={splideOptions(3)}>
        {isLoading ? (
          <ReusedStyle.SpinnerWrapper height='50vh'>
            <ReusedStyle.Spinner src={SpinnerBg} alt='spinner' />
          </ReusedStyle.SpinnerWrapper>
        ) : (
          recipes?.map((recipe) => <RecipeCard key={recipe.id} {...recipe} />)
        )}
      </Splide>

      {error && (
        <ReusedStyle.ErrorMessage>
          <BiError />
          Server error
        </ReusedStyle.ErrorMessage>
      )}
    </SectionContainer>
  )
}
