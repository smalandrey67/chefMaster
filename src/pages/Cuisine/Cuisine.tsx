import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { CuisineEl, CuisineWrapper } from './Cuisine.styled'
import { Container, ErrorMessage, SpinnerWrapper, Spinner, Title } from '../../styled/Reused.styled'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { cuisineRecipesAsync } from '../../store/requests/cuisineRecipesAsync'

import SpinnerBg  from '../../assets/spinner-bg.svg'
import { RecipeCuisine } from '../../components/RecipeCuisine/RecipeCuisine'

import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../types/Status'
import { CuisineResultsType } from '../../types/Cuisine'

import { motionSettings } from '../../utils/motionOptions'

export const Cuisine: FC = () => {
    const dispatch = useAppDispatch()
    const { cuisine, status, error } = useAppSelector(state => state.cuisineRecipesReducer)

    const { type } = useParams() as any

    useEffect(() => {
        dispatch(cuisineRecipesAsync(type))
    }, [type, dispatch])

    return (
        <CuisineEl {...motionSettings} >
            <Container>
                <Title>{type}</Title>
                <CuisineWrapper>
                    {status === StatusEnum.PENDING ?
                        <SpinnerWrapper height='40vh'>
                            <Spinner src={SpinnerBg} alt='spinner' />
                        </SpinnerWrapper>
                        :
                        cuisine.map((recipe: CuisineResultsType): JSX.Element => <RecipeCuisine key={recipe.id} {...recipe} />)
                    }
                    {error && <ErrorMessage>
                        <BiError />
                        {error}
                    </ErrorMessage>}
                </CuisineWrapper>
            </Container>
        </CuisineEl>
    )
}