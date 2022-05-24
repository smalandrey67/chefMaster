import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { CuisineEl, CuisineTitle, CuisineWrapper } from './Cuisine.styled'
import { Container, ErrorMessage, SpinnerWrapper } from '../../styled/Reused.styled'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { cuisineRecipesAsync } from '../../store/requests/cuisineRecipesAsync'

import { Spinner } from '../../components/Spinner/Spinner'
import { RecipeCuisine } from '../../components/RecipeCuisine/RecipeCuisine'

import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../types/Status'
import { motionSettings } from '../../utils/motionSettings'

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
                <CuisineTitle>{type}</CuisineTitle>
                <CuisineWrapper>
                    {status === StatusEnum.PENDING ?
                        <SpinnerWrapper height='40vh'>
                            <Spinner />
                        </SpinnerWrapper>
                        :
                        cuisine.map(recipe => <RecipeCuisine key={recipe.id} recipe={recipe} />)
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