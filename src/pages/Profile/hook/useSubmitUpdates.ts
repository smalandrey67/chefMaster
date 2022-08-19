import { useAppDispatch } from 'hooks/useRedux'
import { updateUserThunk } from 'store/slices/authSlice/authThunk'

export const useSubmitUpdates = (profilePhotoUrl: string | undefined, name: string) => {
   const dispatch = useAppDispatch()

   const submitUpdatesHandler = (): void => {
      if (profilePhotoUrl || name) {
         dispatch(updateUserThunk({ profilePhotoUrl, name }))
      }
   }

   return submitUpdatesHandler
}