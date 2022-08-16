import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Container, ErrorMessage, FieldBlock, FormFooter, FormLink, SpecialTitle } from 'assets/styled/Reused.styled'
import { SubmitUser } from 'types/Authorisation'
import { validation } from 'utils/constants/validation.constants'

import { PopupContainer } from 'components/containers/PopupContainer/PopupContainer'
import { FormContainer } from 'components/containers/FormContainer/FormContainer'
import { InputContainer } from 'components/containers/InputContainer/InputContainer'

import { useRedirect } from 'hooks/useRedirect'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { signInThunk } from 'store/slices/authSlice/authThunk'
import { selectUserAuthError } from 'store/slices/authSlice/authSlice.selectors'

export const Login: FC = () => {
   const { register, formState: { errors }, handleSubmit, reset } = useForm<SubmitUser>({ mode: 'onChange' })

   const authError = useAppSelector(selectUserAuthError)
   const navigateHandler = useRedirect()
   const dispatch = useAppDispatch()

   const submitHandler: SubmitHandler<SubmitUser> = async (data) => {
      const { email, password } = data

      dispatch(signInThunk({ email, password, navigateHandler }))

      reset()
   }

   return (
      <Container>
         <PopupContainer>
            <FormContainer handleSubmit={handleSubmit} submitHandler={submitHandler} title='Log in' buttonTitle='Log in'>
               <FieldBlock>
                  <InputContainer
                     register={register} registerName='email' placeholder='email' type='email' validationType={validation.email}
                  />
                  {errors?.email && <ErrorMessage justifyContent='flex-start'>{errors?.email?.message}</ErrorMessage>}
               </FieldBlock>
               <FieldBlock>
                  <InputContainer
                     register={register} registerName='password' placeholder='password' type='password' validationType={validation.password}
                  />
                  {errors?.password && <ErrorMessage justifyContent='flex-start'>{errors?.password?.message}</ErrorMessage>}
               </FieldBlock>
               <ErrorMessage color='var(--color-error)'>{authError}</ErrorMessage>
            </FormContainer>

            <FormFooter>
               <FormLink to='/registration'>Don't have an account?</FormLink>
               <FormLink to='/reset/password'>Forgot a password?</FormLink>
            </FormFooter>
         </PopupContainer>
      </Container>
   )
}