import { FC } from 'react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Splide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

import { randomRecipeAsync } from '../../store/requests/randomRecipesAsync'
import { ISplide } from '../../models/ISplide'

import { RandomEl } from './Recipes.styled'
import { Container, ErrorMessage } from '../../styled/Reused.styled'

import { Spinner } from '../Spinner/Spinner'
import { Recipe } from '../Recipe/Recipe'

export const Recipes: FC = () => {
    const { recipes, status, error } = useAppSelector(state => state.getRandomRecipesReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(randomRecipeAsync())
    }, [dispatch])

    const splideOptions: ISplide = {
        perPage: 3,
        arrows: false,
        pagination: false,
        gap: '10px',
    }

    return (
        <RandomEl>
            <Container>
                <Splide options={splideOptions}>
                    {status === 'pending' ?
                        <Spinner />
                        :
                        recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
                    }
                </Splide>
                {error && <ErrorMessage>Something went wrong</ErrorMessage>}
            </Container>
        </RandomEl>
    )
}