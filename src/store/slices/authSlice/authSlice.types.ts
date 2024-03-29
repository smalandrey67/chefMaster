import { UseRedirectReturnsType } from 'types/Hooks'

export type UserType = {
  photoURL: string | null
  email: string | null
  name: string | null
  uid: string | null
  documentId?: string
}
export type AuthState = {
  user: UserType | null
  error: string | null
}
export type AuthorisationParametersType = {
  email: string
  password: string
  navigateHandler: UseRedirectReturnsType
  navigatePath: string
}
export type LogOutType = {
  navigateHandler: UseRedirectReturnsType
}
export type UpdateUserThunkParametersType = Partial<{
  photoURL: string
  displayName: string
}>
