import { FC } from 'react'
import { useAppSelector } from 'hooks/useRedux'

import { AuthCheckContainerProps } from './AuthCheckContainer.types'
import { selectCurrentUser } from 'store/slices/authSlice/authSlice.selectors'
import { NotAuthorisated } from 'components/common/NotAuthorisated/NotAuthorisated'

export const AuthCheckContainer: FC<AuthCheckContainerProps> = ({ children }) => {
  const user = useAppSelector(selectCurrentUser)

  if (user === null) {
    return <NotAuthorisated />
  }

  return <>{children}</>
}
