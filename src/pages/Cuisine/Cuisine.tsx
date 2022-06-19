import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { CuisineEl, CuisineWrapper } from './Cuisine.styled'
import { Container, ErrorMessage, SpinnerWrapper, Spinner, Title, ButtonBack } from '../../assets/styled/Reused.styled'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { cuisineAsync } from '../../store/slices/cuisine/cuisineAsync'

import { RecipeCuisine } from '../../components/Cuisine/Cuisine'
import { BackButton } from '../../components/BackButton/BackButton'

import { StatusEnum } from '../../@types/Status'
import { CuisineResultsType } from '../../@types/Cuisine'

import { motion } from '../../utils/constants/motion.constants'
import SpinnerBg from '../../assets/images/spinner-bg.svg'
import { BiError } from 'react-icons/bi'

export const Cuisine: FC = () => {
    const dispatch = useAppDispatch()
    const { cuisine, status, error } = useAppSelector(state => state.cuisine)

    const { type } = useParams() as any
 
    useEffect(() => {
        dispatch(cuisineAsync(type))
    }, [type, dispatch])

    return (
        <CuisineEl {...motion} >
            <Container>

                <BackButton>
                    <Title>{type}</Title>
                </BackButton>
             
                <CuisineWrapper>
                    {status === StatusEnum.PENDING ?
                        <SpinnerWrapper height='40vh'>
                            <Spinner src={SpinnerBg} alt='spinner' />
                        </SpinnerWrapper>
                        :
                        cuisine.map((recipe: CuisineResultsType): JSX.Element => <RecipeCuisine key={recipe.id} {...recipe} />)
                    }
                    {error && <ErrorMessage>
                        <BiError />
                        {error}
                    </ErrorMessage>}
                </CuisineWrapper>
            </Container>
        </CuisineEl>
    )
}