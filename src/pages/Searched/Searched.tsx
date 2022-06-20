import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../hooks/useRedux'
import { searchedAsync } from '../../store/slices/searched/searchedAsync'

import SpinnerBg from '../../assets/images/spinner-bg.svg'
import { CuisineCard } from '../../components/Cards/CuisineCard/CuisineCard'

import { Container, ErrorMessage, SpinnerWrapper, Spinner, RecipesWrapper } from '../../assets/styled/Reused.styled'
import { SearchedWarning } from '../../assets/styled/Reused.styled'

import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../@types/Status'
import { CuisineResultsType } from '../../@types/Cuisine'

export const Searched: FC = () => {
    const dispatch = useAppDispatch()
    const { searched, status, error } = useAppSelector(state => state.searched)
 
    const { name } = useParams() as any

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
                        <SearchedWarning>
                            <BiError size={20} />
                            Nothing was found
                        </SearchedWarning>
                }

                {error && <ErrorMessage>
                    <BiError />
                    {error}
                </ErrorMessage>}
            </RecipesWrapper>
        </Container>
    )
}