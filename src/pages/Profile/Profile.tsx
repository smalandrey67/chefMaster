import { ChangeEvent, FC, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import SpinnerSm from 'assets/images/icons/spinner-sm.svg'
import { Container, ErrorMessage, LinkEl, SpecialTitle, Title, Spinner, Label, Input } from 'assets/styled/Reused.styled'
import {
   ProfileEl, ProfileEmail, ProfileButtonLogOut, ProfileContent, ProfileImageWrapper,
   ProfileImage, ProfileUploadLabel, ProfileInputUpload
} from './Profile.styled'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { BackButton } from 'components/reusable/BackButton/BackButton'
import { selectUser, selectUserAuthError } from 'store/slices/authSlice/authSlice.selectors'

import { useAppSelector } from 'hooks/useRedux'
import { useFileChange } from './hook/useFileChange'
import { useLogOut } from './hook/useLogOut'
import { useSubmitUpdates } from './hook/useSubmitUpdates'

export const Profile: FC = () => {
   const [name, setName] = useState('')

   const { changeFileHandler, profilePhotoUrl, errorOfUploadFile, isLoading } = useFileChange()
   const logOutHandler = useLogOut()
   const submitUpdatesHandler = useSubmitUpdates(profilePhotoUrl, name)

   const user = useAppSelector(selectUser)
   const authError = useAppSelector(selectUserAuthError)

   const isLogOutDisabled = !!Object.values(user || {}).length
   const isUpdateDisabled = profilePhotoUrl || name ? true : false
   const currentProfilePhoto = profilePhotoUrl ? profilePhotoUrl : user?.photoURL ? user.photoURL : null

   const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

   return (
      <SectionContainer>
         <BackButton>
            <Title>Profile</Title>
         </BackButton>
         <ProfileContent>
            <ProfileImageWrapper>
               <ProfileImage src={currentProfilePhoto ?? process.env.REACT_APP_NOT_USER_PROFILE_PHOTO} alt='profile photo' />
               <ProfileUploadLabel>
                  <ProfileInputUpload onChange={changeFileHandler} type='file' name='file' />
               </ProfileUploadLabel>
            </ProfileImageWrapper>
            {isLoading ? <Spinner src={SpinnerSm} alt='spinner' /> : null}
            <ProfileEmail>
               <SpecialTitle fontSize='var(--fs-sm)' fontWeight='var(--fw-semiBold)'>Email: </SpecialTitle>
               {user && user.email ? user.email : <SpecialTitle fontSize='var(--fs-sm)' fontWeight='var(--fw-semiBold)'>You are not authorized</SpecialTitle>}
            </ProfileEmail>
            <ProfileEmail>
               <SpecialTitle fontSize='var(--fs-sm)' fontWeight='var(--fw-semiBold)'>Name: </SpecialTitle>
               {user && user.name ? user.name : <SpecialTitle fontSize='var(--fs-sm)' fontWeight='var(--fw-semiBold)'>No name yet</SpecialTitle>}
            </ProfileEmail>
            <Label>
               <Input
                  value={name}
                  type='text'
                  placeholder='name'
                  name='name'
                  onChange={changeNameHandler}
               />
            </Label>
            <ProfileButtonLogOut disabled={!isLogOutDisabled} onClick={logOutHandler}>Log out</ProfileButtonLogOut>
            <ProfileButtonLogOut disabled={!isUpdateDisabled} onClick={submitUpdatesHandler}>Update</ProfileButtonLogOut>
            <LinkEl to='/login'>Log in</LinkEl>
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