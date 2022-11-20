import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { PopupContainer } from 'components/containers/PopupContainer/PopupContainer'
import * as ReusedStyle from 'assets/styled/Reused.styled'

import { validation } from 'constants/validation'
import { SubmitUserType } from 'types/Authorisation'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { registrationThunk } from 'store/slices/authSlice/authThunk'
import { useRedirect } from 'hooks/useRedirect'
import { selectCurrentUserAuthError } from 'store/slices/authSlice/authSlice.selectors'
import { FormContainer } from 'components/containers/FormContainer/FormContainer'
import { useLocation } from 'react-router-dom'
import { LocationStateType } from 'types/Location'

export const Registration: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<SubmitUserType>({ mode: 'onChange' })

  const { state } = useLocation() as LocationStateType

  const authError = useAppSelector(selectCurrentUserAuthError)
  const dispatch = useAppDispatch()
  const navigateHandler = useRedirect()

  useEffect(() => {
    if (!authError) reset()
  }, [authError, reset])

  const SubmitUserTypeHandler: SubmitHandler<SubmitUserType> = (data): void => {
    const { email, password } = data

    dispatch(
      registrationThunk({
        email: email.trim().toLocaleLowerCase(),
        password: password.trim().toLocaleLowerCase(),
        navigateHandler,
        navigatePath: state?.prevPath ?? '/'
      })
    )
  }

  return (
    <ReusedStyle.Container>
      <PopupContainer>
        <FormContainer handleSubmit={handleSubmit} submitHandler={SubmitUserTypeHandler}>
          <ReusedStyle.Legend>Sign up</ReusedStyle.Legend>
          <ReusedStyle.Group height='50px' margin='10px 0 18px 0'>
            <ReusedStyle.Label>
              <ReusedStyle.Input {...register('email', validation.email)} placeholder='email' type='email' />
            </ReusedStyle.Label>
            {errors?.email && (
              <ReusedStyle.ErrorMessage justifyContent='flex-start'>{errors?.email?.message}</ReusedStyle.ErrorMessage>
            )}
          </ReusedStyle.Group>
          <ReusedStyle.Group height='50px' margin='0 0 18px 0'>
            <ReusedStyle.Label>
              <ReusedStyle.Input
                {...register('password', validation.password)}
                placeholder='password'
                type='password'
              />
            </ReusedStyle.Label>
            {errors?.password && (
              <ReusedStyle.ErrorMessage justifyContent='flex-start'>
                {errors?.password?.message}
              </ReusedStyle.ErrorMessage>
            )}
          </ReusedStyle.Group>
          {<ReusedStyle.ErrorMessage>{authError}</ReusedStyle.ErrorMessage>}
          <ReusedStyle.Group margin='0 0 10px 0' height='40px'>
            <ReusedStyle.Button type='submit' name='submit'>
              Sign up
            </ReusedStyle.Button>
          </ReusedStyle.Group>

          <ReusedStyle.Flex justifyContent='space-between'>
            <ReusedStyle.LinkEl color='var(--color-links)' textDecoration='underline' to='/login'>
              Already have an account?
            </ReusedStyle.LinkEl>
            <ReusedStyle.LinkEl color='var(--color-links)' textDecoration='underline' to='/reset/password'>
              Forgot a password?
            </ReusedStyle.LinkEl>
          </ReusedStyle.Flex>
        </FormContainer>
      </PopupContainer>
    </ReusedStyle.Container>
  )
}
