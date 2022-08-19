import { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Container, ErrorMessage, Form, Fieldset, Legend, Group, Label, Input, Flex, LinkEl, Button } from 'assets/styled/Reused.styled'
import { SubmitUser } from 'types/Authorisation'
import { validation } from 'utils/constants/validation.constants'

import { PopupContainer } from 'components/containers/PopupContainer/PopupContainer'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { resetPasswordThunk } from 'store/slices/authSlice/authThunk'
import { selectUserAuthError } from 'store/slices/authSlice/authSlice.selectors'

export const ResetPassword: FC = () => {
   const { register, formState: { errors }, handleSubmit, reset } = useForm<SubmitUser>({ mode: 'onChange' })

   const authError = useAppSelector(selectUserAuthError)
   const dispatch = useAppDispatch()

   const submitHandler: SubmitHandler<SubmitUser> = async (data) => {
      const { email } = data
      dispatch(resetPasswordThunk({ email }))

      reset()
   }

   return (
      <Container>
         <PopupContainer>
            <Form onSubmit={handleSubmit(submitHandler)} margin='0 0 10px 0'>
               <Fieldset>
                  <Legend>Reset passowrd</Legend>
                  <Group margin='0 0 10px 0'>
                     <Label>
                        <Input
                           {...register('email', validation.email)} placeholder='email' type='email'
                        />
                     </Label>
                     {errors?.email && <ErrorMessage justifyContent='flex-start'>{errors?.email?.message}</ErrorMessage>}
                  </Group>
                  {<ErrorMessage>{authError}</ErrorMessage>}
                  <Button type='submit' name='submit'>Sign up</Button>
               </Fieldset>
               <ToastContainer />
            </Form>
            <Flex alignItems='center' justify='space-between'>
               <LinkEl to='/registration'>Don't have an account?</LinkEl>
               <LinkEl to='/reset/password'>Forgot a password?</LinkEl>
            </Flex>
         </PopupContainer>
      </Container>
   )
}