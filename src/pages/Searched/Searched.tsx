import { FC } from 'react'
import { BiError } from 'react-icons/bi'

import { CuisineCard } from 'components/business/CuisineCard/CuisineCard'
import { ErrorNoResult } from 'components/common/ErrorNoResult/ErrorNoResult.lazy'

import SpinnerBg from 'assets/images/icons/spinner-bg.svg'
import * as ReusedStyle from 'assets/styled/Reused.styled'

import { useGetSearchedQuery } from 'services/RecipesService'
import { useValidateParams } from './hook/useValidateParams'

export const Searched: FC = () => {
  const params = useValidateParams()
  const { data: recipes, error, isLoading } = useGetSearchedQuery(params)

  return (
    <ReusedStyle.Container>
      <ReusedStyle.RecipesWrapper>
        {/* if isLoading true and data?.results actually are so we are rendering them. If not show the error result */}
        {isLoading ? (
          <ReusedStyle.SpinnerWrapper height='50vh'>
            <ReusedStyle.Spinner src={SpinnerBg} alt='spinner' />
          </ReusedStyle.SpinnerWrapper>
        ) : recipes?.length ? (
          recipes.map((recipe) => <CuisineCard key={recipe.id} {...recipe} />)
        ) : (
          <ErrorNoResult description='Nothing was found' height='50vh' />
        )}

        {error && (
          <ReusedStyle.ErrorMessage>
            <BiError />
            Server Error
          </ReusedStyle.ErrorMessage>
        )}
      </ReusedStyle.RecipesWrapper>
    </ReusedStyle.Container>
  )
}
