import { Dispatch, SetStateAction } from 'react'
import { useAppDispatch } from 'hooks/useRedux'
import { updateUserThunk } from 'store/slices/authSlice/authThunk'

import { UseSubmitUpdatesReturnsType } from 'types/Hooks'
import { UpdateUserThunkParametersType } from 'store/slices/authSlice/authSlice.types'

export const useSubmitUpdates = (
  profilePhotoUrl: string | undefined,
  name: string,
  setName: Dispatch<SetStateAction<string>>
): UseSubmitUpdatesReturnsType => {
  const dispatch = useAppDispatch()

  const submitUpdatesHandler = (): void => {
    if (profilePhotoUrl || name) {
      const updatesData = {} as UpdateUserThunkParametersType

      if (profilePhotoUrl) {
        updatesData['photoURL'] = profilePhotoUrl
      }

      if (name) {
        updatesData['displayName'] = name
      }

      dispatch(updateUserThunk(updatesData))
      setName('')
    }
  }

  return submitUpdatesHandler
}
