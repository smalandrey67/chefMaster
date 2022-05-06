import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { CuisineEl, CuisineTitle, CuisineWrapper } from './Cuisine.styled'
import { Container, ErrorMessage } from '../../styled/Reused.styled'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { cuisineRecipesAsync } from '../../store/requests/cuisineRecipesAsync'

import { Spinner } from '../../components/Spinner/Spinner'
import { RecipeCuisine } from '../../components/RecipeCuisine/RecipeCuisine'

export const Cuisine: FC = () => {
    const dispatch = useAppDispatch()
    const { cuisine, status, error } = useAppSelector(state => state.cuisineRecipesReducer)

    const { type } = useParams() as any

    useEffect(() => {
        dispatch(cuisineRecipesAsync(type))
    }, [type, dispatch])

    return (
        <CuisineEl animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} >
            <Container>
                <CuisineTitle>{type}</CuisineTitle>
                <CuisineWrapper>
                    {status === 'pending' ?
                        <Spinner />
                        :
                        cuisine.map(recipe => <RecipeCuisine key={recipe.id} recipe={recipe} />)
                    }
                    {error && <ErrorMessage>Something went wrong</ErrorMessage>}
                </CuisineWrapper>
            </Container>
        </CuisineEl>
    )
}