import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { CuisineEl, CuisineWrapper } from './Cuisine.styled'
import { Container, ErrorMessage, SpinnerWrapper, Spinner, Title } from '../../assets/styled/Reused.styled'

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { cuisineA } from '../../store/slices/cuisine/cuisineA'

import SpinnerBg  from '../../assets/images/spinner-bg.svg'
import { RecipeCuisine } from '../../components/Cuisine/Cuisine'

import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../models/Status'
import { CuisineResultsType } from '../../models/Cuisine'

import { motion } from '../../utils/constants/motion.constants'

export const Cuisine: FC = () => {
    const dispatch = useAppDispatch()
    const { cuisine, status, error } = useAppSelector(state => state.cuisineR)

    const { type } = useParams() as any

    useEffect(() => {
        dispatch(cuisineA(type))
    }, [type, dispatch])

    return (
        <CuisineEl {...motion} >
            <Container>
                <Title>{type}</Title>
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