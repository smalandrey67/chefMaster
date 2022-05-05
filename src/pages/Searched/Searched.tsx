import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { searchedRecipesAsync } from '../../store/requests/searchedRecipesAsync'

import { Spinner } from '../../components/Spinner/Spinner'
import { RecipeCuisine } from '../../components/RecipeCuisine/RecipeCuisine'

import { Container } from '../../styled/Reused/Container.styled'
import { CuisineWrapper } from '../../styled/Basic/Cuisine.styled'
import { ErrorMessage } from '../../styled/Reused/ErrorMessage.styled'


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
                {status === 'pending' ?
                    <Spinner />
                    :
                    searched.map(recipe => <RecipeCuisine key={recipe.id} recipe={recipe} />)
                }
                {error && <ErrorMessage>Something went wrong</ErrorMessage>}
            </CuisineWrapper>
        </Container>
    )
}