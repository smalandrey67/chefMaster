import { FC } from 'react'
import { BiError } from 'react-icons/bi'

import { CuisineCard } from 'components/business/CuisineCard/CuisineCard'
import { ErrorNoResult } from 'components/reusable/ErrorNoResult/ErrorNoResult'

import SpinnerBg from 'assets/images/icons/spinner-bg.svg'
import { Container, ErrorMessage, SpinnerWrapper, Spinner, RecipesWrapper } from 'assets/styled/Reused.styled'

import { CuisineResultsType } from 'types/Cuisine'
import { useGetSearchedQuery } from 'services/RecipesService'
import { useValidateParams } from './hook/useValidateParams' 

export const Searched: FC = () => {
    const { params } = useValidateParams()
    const { data: recipes, error, isLoading } = useGetSearchedQuery(params)
    
    return (
        <Container>
            <RecipesWrapper>
                {/* if isLoading true and data?.results actually are so we are rendering them. If not show the error result */}
                {isLoading ?
                    <SpinnerWrapper height='50vh'>
                        <Spinner src={SpinnerBg} alt='spinner' />
                    </SpinnerWrapper>
                    :
                    recipes?.length ?
                        recipes.map((recipe: CuisineResultsType): JSX.Element =>
                            <CuisineCard key={recipe.id} {...recipe} />
                        )
                        :
                        <ErrorNoResult description='Nothing was found' height='50vh' />
                }

                {error && <ErrorMessage><BiError />Server Error</ErrorMessage>}
            </RecipesWrapper>
        </Container>
    )
}