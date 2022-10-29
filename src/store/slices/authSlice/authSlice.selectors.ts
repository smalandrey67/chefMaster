import { RootState } from 'store/store'
import { UserType } from './authSlice.types'

export const selectCurrentUser = (state: RootState): UserType | null => state.authorisation.user
export const selectCurrentUserAuthError = (state: RootState): string | null => state.authorisation.error
