import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux'
import { nutritionsAsync } from '../../../store/slices/nutritions/nutritionsAsync'

import { ErrorMessage, SpinnerWrapper, Spinner } from '../../../assets/styled/Reused.styled'
import { NutritionWrapper, NutritionItem } from './Nutritions.styled'

import SpinnerSm from '../../../assets/images/spinner-sm.svg'

import { GiPaperArrow, GiRawEgg } from 'react-icons/gi'
import { ImFire } from 'react-icons/im'
import { BiError } from 'react-icons/bi'

import { StatusEnum } from '../../../@types/Status'

type NutritionProps = {
    id: string;
}

export const Nutritions: FC<NutritionProps> = ({ id }) => {
    const { nutrition, status, error } = useAppSelector(state => state.nutritions)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(nutritionsAsync(id))
    }, [id, dispatch])

    return (
        <NutritionWrapper>
            {status === StatusEnum.PENDING ?
                <SpinnerWrapper height='15vh'>
                    <Spinner src={SpinnerSm} alt='spinner' />
                </SpinnerWrapper>
                :
                <>
                    <NutritionItem>
                        <GiPaperArrow size='20' />
                        {nutrition.carbs} carbs
                    </NutritionItem>

                    <NutritionItem>
                        <GiRawEgg size='20' />
                        {nutrition.protein} proteins
                    </NutritionItem>

                    <NutritionItem>
                        <ImFire size='20' />
                        {nutrition.calories} Kcal
                    </NutritionItem>
                </>
            }
            {error && <ErrorMessage>
                <BiError />
                {error}
            </ErrorMessage>}
        </NutritionWrapper>
    )
}