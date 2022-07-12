import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { CuisineEl } from './Cuisines.styled'
import { Container, ErrorMessage, SpinnerWrapper, Spinner, Title, RecipesWrapper } from '../../assets/styled/Reused.styled'
import SpinnerBg from '../../assets/images/icons/spinner-bg.svg'

import { CuisineCard } from '../../components/business/CuisineCard/CuisineCard'
import { BackButton } from '../../components/reusable/BackButton/BackButton'

import { CuisineResultsType } from '../../@types/Cuisine'
import { motion } from '../../utils/constants/motion.constants'
import { BiError } from 'react-icons/bi'
import { useGetCuisineQuery } from '../../services/RecipesService'

export const Cuisines: FC = () => {
    const params = useParams<{ type: string }>()
    const { data: cuisines, error, isLoading } = useGetCuisineQuery(params.type)

    return (
        <CuisineEl {...motion} >
            <Container>
                <BackButton>
                    <Title>{params?.type}</Title>
                </BackButton>
             
                <RecipesWrapper>
                    {isLoading ?
                        <SpinnerWrapper height='40vh'>
                            <Spinner src={SpinnerBg} alt='spinner' />
                        </SpinnerWrapper>
                        :
                        cuisines?.results.map((recipe: CuisineResultsType): JSX.Element => <CuisineCard key={recipe.id} {...recipe} />)
                    }
                    {error && <ErrorMessage><BiError />Server Error</ErrorMessage>}
                </RecipesWrapper>
            </Container>
        </CuisineEl>
    )
}