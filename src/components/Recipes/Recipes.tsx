import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { Splide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { randomRecipeAsync } from '../../store/requests/randomRecipesAsync'

import { RandomEl } from './Recipes.styled'
import { Container, ErrorMessage, SpinnerWrapper, Spinner } from '../../styled/Reused.styled'

import SpinnerBg from '../../assets/spinner-bg.svg'
import { Recipe } from '../Recipe/Recipe'

import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../types/Status'
import { RecipeResultType } from '../../types/Recipe'

import { splideOptions } from '../../utils/splideOptions'

export const Recipes: FC = () => {
    const { recipes, status, error } = useAppSelector(state => state.getRandomRecipesReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(randomRecipeAsync())
    }, [dispatch])

    return (
        <RandomEl>
            <Container>
                <Splide options={splideOptions}>
                    {status === StatusEnum.PENDING ?
                        <SpinnerWrapper height='50vh'>
                            <Spinner src={SpinnerBg} alt='spinner' />
                        </SpinnerWrapper>
                        :
                        recipes.map((recipe: RecipeResultType): JSX.Element => <Recipe key={recipe.id} {...recipe} />)
                    }
                </Splide>
                {error && <ErrorMessage>
                    <BiError />
                    {error}
                </ErrorMessage>}
            </Container>
        </RandomEl>
    )
}