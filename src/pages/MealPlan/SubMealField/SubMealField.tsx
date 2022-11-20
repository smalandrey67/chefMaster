import { FC, useEffect, memo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useSetActiveMealDay } from '../hook/useSetActiveMealDay'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'

import { addSubMealMenu } from 'store/slices/mealPlanSlice/mealPlanSlice'
import { selectActiveMealDay } from 'store/slices/mealPlanSlice/mealPlanSlice.selectors'

import * as ReusedStyle from 'assets/styled/Reused.styled'
import { FormContainer } from 'components/containers/FormContainer/FormContainer'
import { validation } from 'constants/validation'
import { SubMealFieldProps, SubmitSubMealType } from './SubMealField.types'
import { updateMealPlanThunk } from 'store/slices/mealPlanSlice/mealPlanThunk'

export const SubMealField: FC<SubMealFieldProps> = memo(({ isSubMealMenu }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setFocus
  } = useForm<SubmitSubMealType>({ mode: 'onChange' })

  const activeDay = useAppSelector(selectActiveMealDay)
  const dispatch = useAppDispatch()
  const setActiveMealDayHandler = useSetActiveMealDay()

  const submitSubMealHandler: SubmitHandler<SubmitSubMealType> = (data): void => {
    const subMealMenuTitle = data.subMealName.trim().toLocaleLowerCase()

    dispatch(addSubMealMenu({ subMealMenuTitle, idWeek: activeDay.idWeek }))
    setActiveMealDayHandler(activeDay.idWeek)
    dispatch(updateMealPlanThunk())

    reset()
  }

  useEffect(() => {
    setFocus('subMealName')
  }, [isSubMealMenu, setFocus])

  const animateHeightValue = isSubMealMenu ? '35px' : 0
  const animateOpacityValue = isSubMealMenu ? 1 : 0
  const animateMarginValue = isSubMealMenu ? '0 0 10px 0' : 0

  return (
    <FormContainer handleSubmit={handleSubmit} submitHandler={submitSubMealHandler}>
      <ReusedStyle.Group
        maxwidth='500px'
        animate={{ height: animateHeightValue, opacity: animateOpacityValue, margin: animateMarginValue }}
        transition={{ type: 'tween', duration: 0.2 }}
      >
        <ReusedStyle.Label>
          <ReusedStyle.Input
            {...register('subMealName', validation.subMeal)}
            disabled={!isSubMealMenu}
            type='text'
            enterKeyHint='done'
          />
        </ReusedStyle.Label>
        {errors?.subMealName && (
          <ReusedStyle.ErrorMessage margin='5px 0 0 0' justifyContent='flex-start'>
            {errors?.subMealName?.message}
          </ReusedStyle.ErrorMessage>
        )}
      </ReusedStyle.Group>
    </FormContainer>
  )
})
