import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { nutritionRecipeAsync } from '../../../store/requests/nutritionRecipeAsync'

import { ErrorMessage } from '../../../styled/Reused.styled'
import { NutritionWrapper, NutritionItem } from './Nutrition.styled'

import { Spinner } from '../../../components/Spinner/Spinner'

import { GiPaperArrow, GiRawEgg, GiFat } from 'react-icons/gi'
import { ImFire } from 'react-icons/im'


type NutritionProps = {
    id: string;
}

export const Nutrition: FC<NutritionProps> = ({ id }) => {
    const { nutrition, status, error } = useAppSelector(state => state.nutritionRecipeReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(nutritionRecipeAsync(id))
    }, [id, dispatch])

   
    return (
        <NutritionWrapper>
            {status === 'pending' ?
                <Spinner />
                : 
                <>
                    <NutritionItem>
                        <GiPaperArrow size="20" /> 
                        {nutrition?.carbs} carbs
                    </NutritionItem> 

                    <NutritionItem>
                        <GiRawEgg size="20" />
                        {nutrition?.protein} proteins
                    </NutritionItem>

                    <NutritionItem>
                        <ImFire size="20" />
                        {nutrition?.calories} Kcal
                    </NutritionItem> 

                    <NutritionItem>
                        <GiFat size="20" />
                        {nutrition?.fat} fats
                    </NutritionItem>
                </>
            }
            {error && <ErrorMessage>Something went wrong</ErrorMessage>}
        </NutritionWrapper>
    )
}