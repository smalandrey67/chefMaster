import { FC, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { SubmitHandler, useForm } from 'react-hook-form'

import * as ReusedStyle from 'assets/styled/Reused.styled'
import { SubmitResetPasswordType } from 'types/Authorisation'
import { validation } from 'constants/validation'

import { PopupContainer } from 'components/containers/PopupContainer/PopupContainer'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { resetPasswordThunk } from 'store/slices/authSlice/authThunk'
import { selectCurrentUserAuthError } from 'store/slices/authSlice/authSlice.selectors'
import { FormContainer } from 'components/containers/FormContainer/FormContainer'

export const ResetPassword: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<SubmitResetPasswordType>({ mode: 'onChange' })

  const authError = useAppSelector(selectCurrentUserAuthError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!authError) reset()
  }, [authError, reset])

  const submitResetPasswordHandler: SubmitHandler<SubmitResetPasswordType> = (data): void => {
    const { email } = data

    dispatch(resetPasswordThunk({ email: email.trim().toLocaleLowerCase() }))
  }

  return (
    <ReusedStyle.Container>
      <PopupContainer>
        <FormContainer handleSubmit={handleSubmit} submitHandler={submitResetPasswordHandler}>
          <ReusedStyle.Legend>Reset the password</ReusedStyle.Legend>
          <ReusedStyle.Group height='50px' margin='10px 0 18px 0'>
            <ReusedStyle.Label>
              <ReusedStyle.Input {...register('email', validation.email)} placeholder='email' type='email' />
            </ReusedStyle.Label>
            {errors?.email && (
              <ReusedStyle.ErrorMessage justifyContent='flex-start'>{errors?.email?.message}</ReusedStyle.ErrorMessage>
            )}
          </ReusedStyle.Group>
          {<ReusedStyle.ErrorMessage>{authError}</ReusedStyle.ErrorMessage>}
          <ReusedStyle.Group margin='0 0 10px 0' height='40px'>
            <ReusedStyle.Button type='submit' name='submit'>
              Reset
            </ReusedStyle.Button>
          </ReusedStyle.Group>
          <ReusedStyle.Flex>
            <ReusedStyle.LinkEl color='var(--color-links)' textDecoration='underline' to='/login'>
              Already have an account?
            </ReusedStyle.LinkEl>
          </ReusedStyle.Flex>
        </FormContainer>
        <ToastContainer role='alert' />
      </PopupContainer>
    </ReusedStyle.Container>
  )
}
