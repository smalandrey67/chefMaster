import { useEffect } from 'react'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'firebaseConfig'

import { addUser } from 'store/slices/authSlice/authSlice'
import { useAppDispatch } from './useRedux'

export const useAuthStateChanged = (): void => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser): void => {
      if (currentUser) {
        dispatch(addUser(currentUser))
      }
    })

    return unsubscribe
  }, [dispatch])
}
