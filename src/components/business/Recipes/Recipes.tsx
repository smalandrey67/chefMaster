import { FC } from 'react'

import { RandomEl } from './Recipes.styled'
import { Container, ErrorMessage, SpinnerWrapper, Spinner } from '../../../assets/styled/Reused.styled'
import SpinnerBg from '../../../assets/images/icons/spinner-bg.svg'

import { RecipeCard } from '../RecipeCard/RecipeCard'
import { BiError } from 'react-icons/bi'
import { RecipeResultType } from '../../../@types/Recipe'

import { splideOptions } from '../../../utils/constants/splide.constants'
import { useGetRandomRecipesQuery } from '../../../services/RecipesService'
import { Splide } from '@splidejs/react-splide'

export const Recipes: FC = () => {
    const { data, error, isLoading } = useGetRandomRecipesQuery()

    return (
        <RandomEl>
            <Container>
                <Splide options={splideOptions(3)}>
                    {isLoading ?
                        <SpinnerWrapper height='50vh'>
                            <Spinner src={SpinnerBg} alt='spinner' />
                        </SpinnerWrapper>
                        :
                        data?.recipes.map((recipe: RecipeResultType): JSX.Element => <RecipeCard key={recipe.id} {...recipe} />)
                    }
                </Splide>

                {error && <ErrorMessage><BiError />Server error</ErrorMessage>}
            </Container>
        </RandomEl>
    )
}