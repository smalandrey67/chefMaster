import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Container, ErrorMessage, Group, Label, Input, Flex, LinkEl, Button, Legend } from 'assets/styled/Reused.styled'
import { SubmitUserType } from 'types/Authorisation'
import { LocationStateType } from 'types/Location'
import { validation } from 'constants/validation'

import { FormContainer } from 'components/containers/FormContainer/FormContainer'
import { PopupContainer } from 'components/containers/PopupContainer/PopupContainer'

import { useRedirect } from 'hooks/useRedirect'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'

import { signInThunk } from 'store/slices/authSlice/authThunk'
import { selectCurrentUserAuthError } from 'store/slices/authSlice/authSlice.selectors'

export const Login: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<SubmitUserType>({ mode: 'onChange' })

  const { state } = useLocation() as LocationStateType

  const authError = useAppSelector(selectCurrentUserAuthError)
  const navigateHandler = useRedirect()
  const dispatch = useAppDispatch()

  const SubmitUserTypeHandler: SubmitHandler<SubmitUserType> = (data): void => {
    const { email, password } = data

    dispatch(
      signInThunk({
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
          <Legend>Log in</Legend>
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
              Log in
            </Button>
          </Group>

          <Flex justifyContent='space-between'>
            <LinkEl
              color='var(--color-links)'
              textDecoration='underline'
              to='/registration'
              state={{ prevPath: state?.prevPath }}
            >
              Don't have an account?
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
