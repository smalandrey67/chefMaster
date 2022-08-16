import { RootState } from 'store/store'

export const selectUser  = (state: RootState) => state.authorisation.user
export const selectUserAuthError = (state: RootState) => state.authorisation.error 