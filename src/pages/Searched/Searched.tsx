import { FC } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { CuisineCard } from '../../components/business/CuisineCard/CuisineCard'
import { ErrorNoResult } from '../../components/reusable/ErrorNoResult/ErrorNoResult'

import SpinnerBg from '../../assets/images/icons/spinner-bg.svg'
import { Container, ErrorMessage, SpinnerWrapper, Spinner, RecipesWrapper } from '../../assets/styled/Reused.styled'

import { BiError } from 'react-icons/bi'
import { CuisineResultsType } from '../../@types/Cuisine'
import { useGetSearchedQuery } from '../../services/RecipesService'



export const Searched: FC = () => {
    const params = useParams<{ name: string }>()
    const [searchParams] = useSearchParams()

    const type: string | null = searchParams.get('type') || null
    const diet: string | null  = searchParams.get('diet') || null

    const { data: recipes, error, isLoading } = useGetSearchedQuery({ query: params.name, type, diet })
    
    return (
        <Container>
            <RecipesWrapper>
                {/* if isLoading true and data?.results actually are so we are rendering them. If not show the error result */}
                {isLoading ?
                    <SpinnerWrapper height='50vh'>
                        <Spinner src={SpinnerBg} alt='spinner' />
                    </SpinnerWrapper>
                    :
                    recipes?.results.length ?
                        recipes.results.map((recipe: CuisineResultsType): JSX.Element =>
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