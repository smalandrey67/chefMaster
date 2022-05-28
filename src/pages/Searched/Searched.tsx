import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../hooks/useRedux'
import { searchedRecipesAsync } from '../../store/requests/searchedRecipesAsync'

import { Spinner } from '../../components/Spinner/Spinner'
import { RecipeCuisine } from '../../components/RecipeCuisine/RecipeCuisine'

import { Container, ErrorMessage, SpinnerWrapper } from '../../styled/Reused.styled'
import { CuisineWrapper } from '../Cuisine/Cuisine.styled'
import { SearchedWarning } from '../../styled/Reused.styled'

import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../types/Status'
import { CuisineResultsType } from '../../types/Cuisine'

export const Searched: FC = () => {
    const dispatch = useAppDispatch()
    const { searched, status, error } = useAppSelector(state => state.searchedRecipesReducer)

    const { name } = useParams() as any

    useEffect(() => {
        dispatch(searchedRecipesAsync(name))
    }, [name, dispatch])

    return (
        <Container>
            <CuisineWrapper>

                {status === StatusEnum.PENDING ?
                    <SpinnerWrapper height='50vh'>
                        <Spinner />
                    </SpinnerWrapper>
                    :
                    searched.length ?
                        searched.map((recipe: CuisineResultsType): JSX.Element =>
                            <RecipeCuisine key={recipe.id} {...recipe} />
                        )
                        :
                        <SearchedWarning>
                            <BiError />
                            Nothing was found
                        </SearchedWarning>
                }

                {error && <ErrorMessage>
                    <BiError />
                    {error}
                </ErrorMessage>}
            </CuisineWrapper>
        </Container>
    )
}