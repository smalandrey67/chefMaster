import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../hooks/useRedux'
import { searchedAsync } from '../../store/slices/searched/searchedAsync'

import SpinnerBg from '../../assets/images/spinner-bg.svg'
import { CuisineCard } from '../../components/ui/CuisineCard/CuisineCard'
import { ErrorNoResult } from '../../components/reusable/ErrorNoResult/ErrorNoResult'

import { Container, ErrorMessage, SpinnerWrapper, Spinner, RecipesWrapper } from '../../assets/styled/Reused.styled'

import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../@types/Status'
import { CuisineResultsType } from '../../@types/Cuisine'

export const Searched: FC = () => {
    const dispatch = useAppDispatch()
    const { searched, status, error } = useAppSelector(state => state.searched)

    const { name } = useParams() as never

    useEffect(() => {
        dispatch(searchedAsync(name))
    }, [name, dispatch])

    return (
        <Container>
            <RecipesWrapper>
                {status === StatusEnum.PENDING ?
                    <SpinnerWrapper height='50vh'>
                        <Spinner src={SpinnerBg} alt='spinner' />
                    </SpinnerWrapper>
                    :
                    searched.length ?
                        searched.map((recipe: CuisineResultsType): JSX.Element =>
                            <CuisineCard key={recipe.id} {...recipe} />
                        )
                        :
                        <ErrorNoResult description='Nothing was found' height='50vh' />
                }

                {error && <ErrorMessage>
                    <BiError />
                    {error}
                </ErrorMessage>}
            </RecipesWrapper>
        </Container>
    )
}