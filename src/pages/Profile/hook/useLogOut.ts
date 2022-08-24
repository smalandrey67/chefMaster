import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useRedirect } from 'hooks/useRedirect'

import { selectCurrentUser } from 'store/slices/authSlice/authSlice.selectors'
import { logOutThunk } from 'store/slices/authSlice/authThunk'

import { UseLogOutReturnsType } from 'types/Hooks'

export const useLogOut = (): UseLogOutReturnsType => {
   const user = useAppSelector(selectCurrentUser)

   const dispatch = useAppDispatch()
   const navigateHandler = useRedirect()

   const logOutHandler = (): void => {
      if (Object.values(user || {}).length) {
         dispatch(logOutThunk({ navigateHandler }))
      }
   }

   return logOutHandler
}