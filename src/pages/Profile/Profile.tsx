import { FC } from 'react'

import SpinnerSm from 'assets/images/icons/spinner-sm.svg'
import { Container, ErrorMessage, FormLink, SpecialTitle, Title, Spinner } from 'assets/styled/Reused.styled'
import { ProfileEl, ProfileEmail, ProfileButtonLogOut, ProfileContent, ProfileImageWrapper,
   ProfileImage, ProfileUploadLabel, ProfileInputUpload
} from './Profile.styled'

import { BackButton } from 'components/reusable/BackButton/BackButton'
import { selectUser, selectUserAuthError } from 'store/slices/authSlice/authSlice.selectors'

import { useAppSelector } from 'hooks/useRedux'
import { useFileChange } from './hook/useFileChange'
import { useLogOut } from './hook/useLogOut'
import { useSubmitUpdates } from './hook/useSubmitUpdates'

export const Profile: FC = () => {
   const { changeFileHandler, profilePhotoUrl, errorOfUploadFile, isLoading } = useFileChange()
   const logOutHandler = useLogOut()
   const submitUpdatesHandler = useSubmitUpdates(profilePhotoUrl)

   const user = useAppSelector(selectUser)
   const authError = useAppSelector(selectUserAuthError)

   const isLogOutDisabled = !!Object.values(user || {}).length
   const isUpdateDisabled = !!profilePhotoUrl
   const currentProfilePhoto = profilePhotoUrl ? profilePhotoUrl : user?.photoURL ? user.photoURL : null

   return (
      <ProfileEl>
         <Container>
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
                  <SpecialTitle margin='0 100px 0 0' fontSize='var(--fs-sm)' fontWeight='var(--fw-semiBold)'>Email: </SpecialTitle>
                  {user && user.email ? user.email : 'You are not authorized'}
               </ProfileEmail>
               <ProfileButtonLogOut disabled={!isLogOutDisabled} onClick={logOutHandler}>Log out</ProfileButtonLogOut>
               <ProfileButtonLogOut disabled={!isUpdateDisabled} onClick={submitUpdatesHandler}>Update</ProfileButtonLogOut>
               <FormLink to='/login'>Log in</FormLink>
               <ErrorMessage>
                  <>
                     {authError} 
                     {errorOfUploadFile}
                  </>
               </ErrorMessage>
            </ProfileContent>
         </Container>
      </ProfileEl>
   )
}