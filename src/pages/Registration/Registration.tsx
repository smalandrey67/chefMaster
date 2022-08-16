import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { PopupContainer } from 'components/containers/PopupContainer/PopupContainer'
import { FormContainer } from 'components/containers/FormContainer/FormContainer'
import { InputContainer } from 'components/containers/InputContainer/InputContainer'

import { Container, ErrorMessage, FieldBlock, FormFooter, FormLink, SpecialTitle } from 'assets/styled/Reused.styled'
import { validation } from 'utils/constants/validation.constants'
import { SubmitUser } from 'types/Authorisation'

import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { registrationThunk } from 'store/slices/authSlice/authThunk'
import { useRedirect } from 'hooks/useRedirect'
import { selectUserAuthError } from 'store/slices/authSlice/authSlice.selectors'


export const Registration: FC  = () => {
   const { register, formState: { errors }, handleSubmit, reset } = useForm<SubmitUser>({ mode: 'onChange' })

   const authError = useAppSelector(selectUserAuthError)
   const dispatch = useAppDispatch()
   const navigateHandler = useRedirect()

   const submitHandler: SubmitHandler<SubmitUser> = async (data) => {
      const { email, password } = data

      dispatch(registrationThunk({ email, password, navigateHandler }))
   
      reset()
   } 

   return (
      <Container>
         <PopupContainer>
            <FormContainer handleSubmit={handleSubmit} submitHandler={submitHandler} title='Sign up' buttonTitle='Sign up'>
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
               <SpecialTitle fontWeight='var(--fw-semiBold)' fontSize='var(--fs-sm)'>Already have an account?</SpecialTitle>
               <FormLink to='/login'>Login</FormLink>
            </FormFooter>
         </PopupContainer>
      </Container>
   )
}