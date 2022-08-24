import { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Container, ErrorMessage, Legend, Label, Input, Flex, LinkEl, Button, Group } from 'assets/styled/Reused.styled'
import { SubmitResetPasswordType } from 'types/Authorisation'
import { validation } from 'utils/constants/validation.constants'

import { PopupContainer } from 'components/containers/PopupContainer/PopupContainer'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { resetPasswordThunk } from 'store/slices/authSlice/authThunk'
import { selectCurrentUserAuthError } from 'store/slices/authSlice/authSlice.selectors'
import { FormContainer } from 'components/containers/FormContainer/FormContainer'

export const ResetPassword: FC = () => {
   const { register, formState: { errors }, handleSubmit, reset } = useForm<SubmitResetPasswordType>({ mode: 'onChange' })

   const authError = useAppSelector(selectCurrentUserAuthError)
   const dispatch = useAppDispatch()

   const submitResetPasswordHandler: SubmitHandler<SubmitResetPasswordType> = (data): void => {
      const { email } = data
      dispatch(resetPasswordThunk({ email }))

      reset()
   }

   return (
      <Container>
         <PopupContainer>
            <FormContainer handleSubmit={handleSubmit} submitHandler={submitResetPasswordHandler}>
               <Legend>Reset the password</Legend>
               <Group height='50px' margin='0 0 18px 0'>
                  <Label>
                     <Input
                        {...register('email', validation.email)} placeholder='email' type='email'
                     />
                  </Label>
                  {errors?.email && <ErrorMessage justifyContent='flex-start'>{errors?.email?.message}</ErrorMessage>}
               </Group>
               {<ErrorMessage>{authError}</ErrorMessage>}
               <Group margin='0 0 10px 0' height='40px'>
                  <Button type='submit' name='submit'>Reset</Button>
               </Group>
               <Flex>
                  <LinkEl color='var(--color-links)' textDecoration='underline' to='/login'>Already have an account?</LinkEl>
               </Flex>
            </FormContainer>
            <ToastContainer />
         </PopupContainer>
      </Container>
   )
}