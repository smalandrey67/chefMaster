import { RootState } from 'store/store'

export const selectCurrentUser = (state: RootState) => state.authorisation.user
export const selectCurrentUserAuthError = (state: RootState) => state.authorisation.error
