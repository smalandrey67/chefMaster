import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { Splide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { recipesA } from '../../store/slices/recipes/recipesA'

import { RandomEl } from './Recipes.styled'
import { Container, ErrorMessage, SpinnerWrapper, Spinner } from '../../assets/styled/Reused.styled'

import SpinnerBg from '../../assets/images/spinner-bg.svg'
import { Recipe } from '../Recipe/Recipe'

import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../models/Status'
import { RecipeResultType } from '../../models/Recipe'

import { splide } from '../../utils/constants/splide.constants'

export const Recipes: FC = () => {
    const { recipes, status, error } = useAppSelector(state => state.recipesR)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(recipesA())
    }, [dispatch])

    return (
        <RandomEl>
            <Container>
                <Splide options={splide}>
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