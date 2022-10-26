import { FC, memo } from 'react'

import { ErrorMessage, SpinnerWrapper, Spinner } from 'assets/styled/Reused.styled'
import * as Style from './Nutritions.styled'
import SpinnerSm from 'assets/images/icons/spinner-sm.svg'

import { GiPaperArrow, GiRawEgg } from 'react-icons/gi'
import { ImFire } from 'react-icons/im'
import { BiError } from 'react-icons/bi'

import { useGetNutritionsQuery } from 'services/RecipesService'
import { NutritionProps } from './Nutritions.types'

export const Nutritions: FC<NutritionProps> = memo(({ id }) => {
  const { data: nutrition, error, isLoading } = useGetNutritionsQuery(id)

  return (
    <Style.NutritionWrapper>
      {isLoading ? (
        <SpinnerWrapper height='15vh'>
          <Spinner src={SpinnerSm} alt='spinner' />
        </SpinnerWrapper>
      ) : (
        <>
          <Style.NutritionItem>
            <GiPaperArrow size='20' />
            {nutrition?.carbs} carbs
          </Style.NutritionItem>

          <Style.NutritionItem>
            <GiRawEgg size='20' />
            {nutrition?.protein} proteins
          </Style.NutritionItem>

          <Style.NutritionItem>
            <ImFire size='20' />
            {nutrition?.calories} Kcal
          </Style.NutritionItem>
        </>
      )}
      {error && (
        <ErrorMessage>
          <BiError />
          Server Error
        </ErrorMessage>
      )}
    </Style.NutritionWrapper>
  )
})
