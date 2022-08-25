import { ChangeEvent, FC, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import SpinnerSm from 'assets/images/icons/spinner-sm.svg'
import {
   ErrorMessage, LinkEl, Span, Title, Spinner,
   Label, Input, Image, Flex, Group, Button
} from 'assets/styled/Reused.styled'
import { ProfileContent, ProfileImageWrapper, ProfileUploadLabel } from './Profile.styled'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { BackButtonContainer } from 'components/containers/BackButtonContainer/BackButtonContainer'
import { selectCurrentUser, selectCurrentUserAuthError } from 'store/slices/authSlice/authSlice.selectors'

import { useAppSelector } from 'hooks/useRedux'
import { useFileChange } from './hook/useFileChange'
import { useLogOut } from './hook/useLogOut'
import { useSubmitUpdates } from './hook/useSubmitUpdates'

export const Profile: FC = () => {
   const [name, setName] = useState('')

   const { changeFileHandler, profilePhotoUrl, errorOfUploadFile, isLoading } = useFileChange()
   const logOutHandler = useLogOut()
   const submitUpdatesHandler = useSubmitUpdates(profilePhotoUrl, name, setName)

   const user = useAppSelector(selectCurrentUser)
   const authError = useAppSelector(selectCurrentUserAuthError)

   const isUserAuthorisated = !!Object.values(user || {}).length
   const isUpdateDisabled = profilePhotoUrl || name ? true : false
   const currentProfilePhoto = profilePhotoUrl ? profilePhotoUrl : user?.photoURL ? user.photoURL : null

   const updateNameHandler = (e: ChangeEvent<HTMLInputElement>): void => setName(e.target.value)

   return (
      <SectionContainer>
         <BackButtonContainer>
            <Title>Profile</Title>
         </BackButtonContainer>
         <ProfileContent>

            <ProfileImageWrapper>
               <Image
                  objectFit='cover'
                  src={currentProfilePhoto ?? process.env.REACT_APP_NOT_USER_PROFILE_PHOTO}
                  alt='profile photo'
               />
               <ProfileUploadLabel>
                  <Input hidden onChange={changeFileHandler} type='file' name='file' />
               </ProfileUploadLabel>
            </ProfileImageWrapper>
            {isLoading ? <Spinner src={SpinnerSm} alt='spinner' /> : null}

            <Flex margin='0 0 7px 0' width='100%' justifyContent='space-between'>
               <Span fontSize='var(--fs-sm)' fontWeight='var(--fw-semiBold)'>Email: </Span>
               {user && user.email ? user.email : <Span fontSize='var(--fs-sm)'>You are not authorized</Span>}
            </Flex>
            <Flex margin='0 0 7px 0' width='100%' justifyContent='space-between'>
               <Span fontSize='var(--fs-sm)' fontWeight='var(--fw-semiBold)'>Name:</Span>
               {user && user.name ? user.name : <Span fontSize='var(--fs-sm)'>No name yet</Span>}
            </Flex>

            <Group margin='0 0 7px 0' width='100%' height='50px'>
               <Label>
                  <Input
                     value={name} type='text' placeholder='name' name='name' onChange={updateNameHandler}
                  />
               </Label>
            </Group>

            <Group margin='0 0 7px 0' width='100%' height='50px'>
               <Button disabled={!isUpdateDisabled} onClick={submitUpdatesHandler} type='button' name='Update'>Update</Button>
            </Group>
            <Group margin='0 0 7px 0' width='100%' height='50px'>
               <Button disabled={!isUserAuthorisated} onClick={logOutHandler} type='button' name='log-out'>Log out</Button>
            </Group>

            {isUserAuthorisated || 
               <LinkEl textDecoration='underline' margin='0 0 15px 0' color='var(--color-links)' to='/login'>
                  Log in
               </LinkEl>
            }

            <ErrorMessage>
               <>
                  {authError}
                  {errorOfUploadFile}
               </>
            </ErrorMessage>
            <ToastContainer />
         </ProfileContent>
      </SectionContainer>
   )
}