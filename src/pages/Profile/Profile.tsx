import { ChangeEvent, FC, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import SpinnerSm from 'assets/images/icons/spinner-sm.svg'
import * as ReusedStyle from 'assets/styled/Reused.styled'
import * as Style from './Profile.styled'

import { SectionContainer } from 'components/containers/SectionContainer/SectionContainer'
import { BackButtonContainer } from 'components/containers/BackButtonContainer/BackButtonContainer'
import { selectCurrentUser, selectCurrentUserAuthError } from 'store/slices/authSlice/authSlice.selectors'

import { useAppSelector } from 'hooks/useRedux'
import { useFileChange } from './hook/useFileChange'
import { useLogOut } from './hook/useLogOut'
import { useSubmitUpdates } from './hook/useSubmitUpdates'
import { config } from 'config'

import { HiPlus } from 'react-icons/hi'

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
      <BackButtonContainer buttonTitle='back'>
        <ReusedStyle.Title>Profile</ReusedStyle.Title>
      </BackButtonContainer>
      <Style.ProfileContent>
        <Style.ProfileImageWrapper>
          <ReusedStyle.Image objectFit='cover' src={currentProfilePhoto ?? config.noUserPhoto} alt='profile photo' />
          <Style.ProfileUploadLabel>
            <ReusedStyle.Input hidden onChange={changeFileHandler} type='file' name='file' />
            <Style.ProfileBackgroundOverImage>
              <HiPlus color='var(--color-white)' size={30} />
            </Style.ProfileBackgroundOverImage>
          </Style.ProfileUploadLabel>
        </Style.ProfileImageWrapper>
        {isLoading ? <ReusedStyle.Spinner src={SpinnerSm} alt='spinner' /> : null}

        <ReusedStyle.Flex margin='0 0 7px 0' width='100%' justifyContent='space-between'>
          <ReusedStyle.Strong fontSize='var(--fs-sm)'>Email: </ReusedStyle.Strong>
          {user && user.email ? (
            user.email
          ) : (
            <ReusedStyle.Strong fontSize='var(--fs-sm)'>You are not authorized</ReusedStyle.Strong>
          )}
        </ReusedStyle.Flex>
        <ReusedStyle.Flex margin='0 0 7px 0' width='100%' justifyContent='space-between'>
          <ReusedStyle.Strong fontSize='var(--fs-sm)'>Name:</ReusedStyle.Strong>
          {user && user.name ? user.name : <ReusedStyle.Strong fontSize='var(--fs-sm)'>No name yet</ReusedStyle.Strong>}
        </ReusedStyle.Flex>

        <ReusedStyle.Group margin='0 0 7px 0' width='100%' height='50px'>
          <ReusedStyle.Label>
            <ReusedStyle.Input value={name} type='text' placeholder='name' name='name' onChange={updateNameHandler} />
          </ReusedStyle.Label>
        </ReusedStyle.Group>

        <ReusedStyle.Group margin='0 0 7px 0' width='100%' height='50px'>
          <ReusedStyle.Button disabled={!isUpdateDisabled} onClick={submitUpdatesHandler} type='button' name='Update'>
            Update
          </ReusedStyle.Button>
        </ReusedStyle.Group>
        <ReusedStyle.Group margin='0 0 7px 0' width='100%' height='50px'>
          <ReusedStyle.Button disabled={!isUserAuthorisated} onClick={logOutHandler} type='button' name='log-out'>
            Log out
          </ReusedStyle.Button>
        </ReusedStyle.Group>

        {isUserAuthorisated || (
          <ReusedStyle.LinkEl textDecoration='underline' margin='0 0 15px 0' color='var(--color-links)' to='/login'>
            Log in
          </ReusedStyle.LinkEl>
        )}

        <ReusedStyle.ErrorMessage>
          <>
            {authError}
            {errorOfUploadFile}
          </>
        </ReusedStyle.ErrorMessage>
        <ToastContainer role='alert' />
      </Style.ProfileContent>
    </SectionContainer>
  )
}
