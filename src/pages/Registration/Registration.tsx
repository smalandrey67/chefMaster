import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { PopupContainer } from 'components/containers/PopupContainer/PopupContainer'
import { Container, ErrorMessage, Legend, Label, Input, Flex, LinkEl, Button, Group } from 'assets/styled/Reused.styled'

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

    reset()
  }

  return (
    <Container>
      <PopupContainer>
        <FormContainer handleSubmit={handleSubmit} submitHandler={SubmitUserTypeHandler}>
          <Legend>Sign up</Legend>
          <Group height='50px' margin='10px 0 18px 0'>
            <Label>
              <Input {...register('email', validation.email)} placeholder='email' type='email' />
            </Label>
            {errors?.email && <ErrorMessage justifyContent='flex-start'>{errors?.email?.message}</ErrorMessage>}
          </Group>
          <Group height='50px' margin='0 0 18px 0'>
            <Label>
              <Input {...register('password', validation.password)} placeholder='password' type='password' />
            </Label>
            {errors?.password && <ErrorMessage justifyContent='flex-start'>{errors?.password?.message}</ErrorMessage>}
          </Group>
          {<ErrorMessage>{authError}</ErrorMessage>}
          <Group margin='0 0 10px 0' height='40px'>
            <Button type='submit' name='submit'>
              Sign up
            </Button>
          </Group>

          <Flex justifyContent='space-between'>
            <LinkEl color='var(--color-links)' textDecoration='underline' to='/login'>
              Already have an account?
            </LinkEl>
            <LinkEl color='var(--color-links)' textDecoration='underline' to='/reset/password'>
              Forgot a password?
            </LinkEl>
          </Flex>
        </FormContainer>
      </PopupContainer>
    </Container>
  )
}
