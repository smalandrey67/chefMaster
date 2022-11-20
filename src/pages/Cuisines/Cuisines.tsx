import { FC } from 'react'
import { useParams } from 'react-router-dom'

import * as ReusedStyle from 'assets/styled/Reused.styled'
import SpinnerBg from 'assets/images/icons/spinner-bg.svg'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { CuisineCard } from 'components/business/CuisineCard/CuisineCard'
import { BackButtonContainer } from 'components/containers/BackButtonContainer/BackButtonContainer'

import { motion } from 'constants/motion'
import { BiError } from 'react-icons/bi'
import { useGetCuisineQuery } from 'services/RecipesService'

export const Cuisines: FC = () => {
  const params = useParams<{ type: string }>()
  const { data: cuisines, error, isLoading } = useGetCuisineQuery(params.type)

  return (
    <SectionContainer motion={motion}>
      <BackButtonContainer buttonTitle='back'>
        <ReusedStyle.Title>{params?.type}</ReusedStyle.Title>
      </BackButtonContainer>
      <ReusedStyle.RecipesWrapper>
        {isLoading ? (
          <ReusedStyle.SpinnerWrapper height='40vh'>
            <ReusedStyle.Spinner src={SpinnerBg} alt='spinner' />
          </ReusedStyle.SpinnerWrapper>
        ) : (
          cuisines?.map((recipe) => <CuisineCard key={recipe.id} {...recipe} />)
        )}
        {error && (
          <ReusedStyle.ErrorMessage>
            <BiError />
            Server Error
          </ReusedStyle.ErrorMessage>
        )}
      </ReusedStyle.RecipesWrapper>
    </SectionContainer>
  )
}
