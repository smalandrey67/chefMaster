import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { ErrorMessage, SpinnerWrapper, Spinner, Title, RecipesWrapper } from 'assets/styled/Reused.styled'
import SpinnerBg from 'assets/images/icons/spinner-bg.svg'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { CuisineCard } from 'components/business/CuisineCard/CuisineCard'
import { BackButtonContainer } from 'components/containers/BackButtonContainer/BackButtonContainer'

import { motion } from 'utils/constants/motion.constants'
import { BiError } from 'react-icons/bi'
import { useGetCuisineQuery } from 'services/RecipesService'

export const Cuisines: FC = () => {
  const params = useParams<{ type: string }>()
  const { data: cuisines, error, isLoading } = useGetCuisineQuery(params.type)

  return (
    <SectionContainer motion={motion}>
      <BackButtonContainer>
        <Title>{params?.type}</Title>
      </BackButtonContainer>
      <RecipesWrapper>
        {isLoading ? (
          <SpinnerWrapper height='40vh'>
            <Spinner src={SpinnerBg} alt='spinner' />
          </SpinnerWrapper>
        ) : (
          cuisines?.map((recipe) => <CuisineCard key={recipe.id} {...recipe} />)
        )}
        {error && (
          <ErrorMessage>
            <BiError />
            Server Error
          </ErrorMessage>
        )}
      </RecipesWrapper>
    </SectionContainer>
  )
}
