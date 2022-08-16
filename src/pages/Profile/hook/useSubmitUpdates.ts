import { useAppDispatch } from 'hooks/useRedux'
import { updateUserThunk } from 'store/slices/authSlice/authThunk'

export const useSubmitUpdates = (profilePhotoUrl: string | undefined) => {
   const dispatch = useAppDispatch()

   const submitUpdatesHandler = (): void => {
      if (profilePhotoUrl) {
         dispatch(updateUserThunk({ profilePhotoUrl }))
      }
   }

   return submitUpdatesHandler
}