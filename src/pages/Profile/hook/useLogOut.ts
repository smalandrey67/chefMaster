import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { useRedirect } from 'hooks/useRedirect'

import { selectUser } from 'store/slices/authSlice/authSlice.selectors'
import { logOutThunk } from 'store/slices/authSlice/authThunk'

export const useLogOut = () => {
   const dispatch = useAppDispatch()
   const user = useAppSelector(selectUser)

   const navigateHandler = useRedirect()

   const logOutHandler = (): void => {
      if (Object.values(user || {}).length) {
         dispatch(logOutThunk({ navigateHandler }))
      }
   }

   return logOutHandler
}