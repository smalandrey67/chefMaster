import { FC } from 'react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Splide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

import { randomRecipeAsync } from '../../store/requests/randomRecipesAsync'

import { RandomEl } from '../../styled/Basic/Recipes.styled'
import { Container } from '../../styled/Reused/Container.styled'
import { ErrorMessage } from '../../styled/Reused/ErrorMessage.styled'

import { Spinner } from '../Spinner/Spinner'
import { Recipe } from '../Recipe/Recipe'

export const Recipes: FC = () => {
    const { recipes, status, error } = useAppSelector(state => state.getRandomRecipesReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(randomRecipeAsync())
        
    }, [dispatch])

    return (
        <RandomEl>
            <Container>
                <Splide options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        gap: '10px'
                    }}>
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