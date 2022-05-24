import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Splide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

import { randomRecipeAsync } from '../../store/requests/randomRecipesAsync'
import { SplideType } from '../../types/Splide'

import { RandomEl } from './Recipes.styled'
import { Container, ErrorMessage, SpinnerWrapper } from '../../styled/Reused.styled'

import { Spinner } from '../Spinner/Spinner'
import { Recipe } from '../Recipe/Recipe'

import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../types/Status'

export const Recipes: FC = () => {
    const { recipes, status, error } = useAppSelector(state => state.getRandomRecipesReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(randomRecipeAsync())
    }, [randomRecipeAsync, dispatch])


    const splideOptions: SplideType = {
        perPage: 3,
        arrows: false,
        pagination: false,
        gap: '10px',
    }

    return (
        <RandomEl>
            <Container>
                <Splide options={splideOptions}>
                    {status === StatusEnum.PENDING ?
                        <SpinnerWrapper height='50vh'>
                            <Spinner />
                        </SpinnerWrapper>
                        :
                        recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
                    }
                </Splide>
                {error && <ErrorMessage>
                    <BiError />
                    Something went wrong
                </ErrorMessage>}
            </Container>
        </RandomEl>
    )
}