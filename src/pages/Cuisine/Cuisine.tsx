import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { CuisineEl, CuisineTitle, CuisineWrapper } from './Cuisine.styled'
import { Container, ErrorMessage, SpinnerWrapper } from '../../styled/Reused.styled'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { cuisineRecipesAsync } from '../../store/requests/cuisineRecipesAsync'

import { Spinner } from '../../components/Spinner/Spinner'
import { RecipeCuisine } from '../../components/RecipeCuisine/RecipeCuisine'

import { BiError } from 'react-icons/bi'

import { IMotion } from '../../models/IMotion'

export const Cuisine: FC = () => {
    const dispatch = useAppDispatch()
    const { cuisine, status, error } = useAppSelector(state => state.cuisineRecipesReducer)

    const { type } = useParams() as any

    useEffect(() => {
        dispatch(cuisineRecipesAsync(type))
    }, [type, dispatch])

    // #settings motion
    const motionSettings: IMotion = {
        animate: {opacity: 1}, 
        initial: {opacity: 0},
        exit: {opacity: 0}, 
        transition: {duration: 0.5}
    }

    return (
        <CuisineEl {...motionSettings} >
            <Container>
                <CuisineTitle>{type}</CuisineTitle>
                <CuisineWrapper>
                    {status === 'pending' ?
                        <SpinnerWrapper height='40vh'>
                            <Spinner />
                        </SpinnerWrapper>
                        :
                        cuisine.map(recipe => <RecipeCuisine key={recipe.id} recipe={recipe} />)
                    }
                    {error && <ErrorMessage>
                        <BiError />
                        Something went wrong
                    </ErrorMessage>}
                </CuisineWrapper>
            </Container>
        </CuisineEl>
    )
}