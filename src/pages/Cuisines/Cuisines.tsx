import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { CuisineEl } from './Cuisines.styled'
import { Container, ErrorMessage, SpinnerWrapper, Spinner, Title, RecipesWrapper } from '../../assets/styled/Reused.styled'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { cuisineAsync } from '../../store/slices/cuisine/cuisineAsync'

import { CuisineCard } from '../../components/ui/CuisineCard/CuisineCard'
import { BackButton } from '../../components/reusable/BackButton/BackButton'

import { StatusEnum } from '../../@types/Status'
import { CuisineResultsType } from '../../@types/Cuisine'

import { motion } from '../../utils/constants/motion.constants'
import SpinnerBg from '../../assets/images/spinner-bg.svg'
import { BiError } from 'react-icons/bi'

export const Cuisines: FC = () => {
    const dispatch = useAppDispatch()
    const { cuisine, status, error } = useAppSelector(state => state.cuisine)

    const { type } = useParams() as never
 
    useEffect(() => {
        dispatch(cuisineAsync(type))
    }, [type, dispatch])

    return (
        <CuisineEl {...motion} >
            <Container>

                <BackButton>
                    <Title>{type}</Title>
                </BackButton>
             
                <RecipesWrapper>
                    {status === StatusEnum.PENDING ?
                        <SpinnerWrapper height='40vh'>
                            <Spinner src={SpinnerBg} alt='spinner' />
                        </SpinnerWrapper>
                        :
                        cuisine.map((recipe: CuisineResultsType): JSX.Element => <CuisineCard key={recipe.id} {...recipe} />)
                    }
                    {error && <ErrorMessage>
                        <BiError />
                        {error}
                    </ErrorMessage>}
                </RecipesWrapper>
            </Container>
        </CuisineEl>
    )
}