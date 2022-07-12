import { FC, memo } from 'react'

import { ErrorMessage, SpinnerWrapper, Spinner } from '../../../assets/styled/Reused.styled'
import { NutritionWrapper, NutritionItem } from './Nutritions.styled'
import SpinnerSm from '../../../assets/images/icons/spinner-sm.svg'

import { GiPaperArrow, GiRawEgg } from 'react-icons/gi'
import { ImFire } from 'react-icons/im'
import { BiError } from 'react-icons/bi'

import { useGetNutritionsQuery } from '../../../services/RecipesService'

type NutritionProps = {
    id: string | undefined;
}

export const Nutritions: FC<NutritionProps> = memo(({ id }) => {
    const { data: nutrition, error, isLoading } = useGetNutritionsQuery(id)

    return (
        <NutritionWrapper>
            {isLoading ?
                <SpinnerWrapper height='15vh'>
                    <Spinner src={SpinnerSm} alt='spinner' />
                </SpinnerWrapper>
                :
                <>
                    <NutritionItem>
                        <GiPaperArrow size='20' />
                        {nutrition?.carbs} carbs
                    </NutritionItem>

                    <NutritionItem>
                        <GiRawEgg size='20' />
                        {nutrition?.protein} proteins
                    </NutritionItem>

                    <NutritionItem>
                        <ImFire size='20' />
                        {nutrition?.calories} Kcal
                    </NutritionItem>
                </>
            }
            {error && <ErrorMessage><BiError />Server Error</ErrorMessage>}
        </NutritionWrapper>
    )
})